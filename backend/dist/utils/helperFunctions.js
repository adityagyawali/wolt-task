"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortRestaurantsBasedOnAvailability = exports.findRestaurantsBasedOnCoordinates = exports.getDistanceBetweenTwoCoordinates = void 0;
var restaurants_json_1 = __importDefault(require("../utils/restaurants.json"));
// gets the distance(as a straight line) in km between two coordinates
//source https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates
function getDistanceBetweenTwoCoordinates(userLocation, resturantLocation) {
    var lon1 = userLocation[0];
    var lat1 = userLocation[1];
    var lon2 = resturantLocation[0];
    var lat2 = resturantLocation[1];
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}
exports.getDistanceBetweenTwoCoordinates = getDistanceBetweenTwoCoordinates;
function deg2rad(deg) {
    return deg * (Math.PI / 180);
}
// get all the restaurants within 1.5km from user location
function findRestaurantsBasedOnCoordinates(userLocation) {
    var restaurantsNearToUser = restaurants_json_1.default.restaurants.filter(function (resturant) {
        var distanceBetweenUserLocationAndResturant = getDistanceBetweenTwoCoordinates(userLocation, resturant.location);
        if (distanceBetweenUserLocationAndResturant < 1.5) {
            return resturant;
        }
        return;
    });
    return restaurantsNearToUser;
}
exports.findRestaurantsBasedOnCoordinates = findRestaurantsBasedOnCoordinates;
// Resturant online: true takes precedence over online: false
function sortRestaurantsBasedOnAvailability(restaurants) {
    var offlineResturants = [];
    var onlineResturants = [];
    for (var i = 0; i < restaurants.length; i++) {
        if (restaurants[i].online) {
            onlineResturants.push(restaurants[i]);
        }
        else {
            offlineResturants.push(restaurants[i]);
        }
    }
    return __spreadArrays(onlineResturants, offlineResturants);
}
exports.sortRestaurantsBasedOnAvailability = sortRestaurantsBasedOnAvailability;
