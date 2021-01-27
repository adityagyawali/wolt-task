"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var date_fns_1 = require("date-fns");
var helperFunctions_1 = require("../utils/helperFunctions");
var router = express_1.default.Router();
router.get('/', function (req, res) {
    var lon = Number(req.query.lon);
    var lat = Number(req.query.lat);
    var userLocation = [lon, lat];
    // find restaurants within 1.5km
    var allRestaurants = helperFunctions_1.findRestaurantsBasedOnCoordinates(userLocation);
    // if no resturants are found within 1.5km then send unavailable message
    if (!allRestaurants.length) {
        return res.status(404).json({ message: 'We are currently unavailable at your location.' });
    }
    // sort restaurants(max 10) based on popularity when the total restaurants with 1.5km
    var popularRestaurants = allRestaurants
        .sort(function (a, b) {
        return b.popularity - a.popularity;
    })
        .slice(0, 10);
    //new restaurants that were opened less than 4 months ago
    var newRestaurants = allRestaurants
        .filter(function (resturant) {
        var currentDate = date_fns_1.startOfToday();
        var launchDate = new Date(resturant.launch_date);
        var totalMonthsResturantIsOpen = date_fns_1.differenceInCalendarMonths(currentDate, launchDate);
        if (totalMonthsResturantIsOpen <= 4) {
            return resturant;
        }
        return false;
    })
        .sort(function (a, b) {
        return b.popularity - a.popularity;
    })
        .slice(0, 10);
    //get restaurants(max 10) closest to the current location
    var nearByRestaurants = allRestaurants
        .sort(function (a, b) {
        return (helperFunctions_1.getDistanceBetweenTwoCoordinates(userLocation, a.location) -
            helperFunctions_1.getDistanceBetweenTwoCoordinates(userLocation, b.location));
    })
        .slice(0, 10);
    var sections = [
        {
            title: 'Popular Restaurants',
            restaurants: helperFunctions_1.sortRestaurantsBasedOnAvailability(popularRestaurants),
        },
        {
            title: 'New Restaurants',
            restaurants: helperFunctions_1.sortRestaurantsBasedOnAvailability(newRestaurants),
        },
        {
            title: 'Nearby Restaurants',
            restaurants: helperFunctions_1.sortRestaurantsBasedOnAvailability(nearByRestaurants),
        },
    ];
    res.status(200).json(sections);
});
exports.default = router;
