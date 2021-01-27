"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("../server"));
var supertest_1 = __importDefault(require("supertest"));
var helperFunctions_1 = require("../utils/helperFunctions");
var date_fns_1 = require("date-fns");
var api = supertest_1.default(server_1.default);
describe('GET /discovery - a simple api endpoint', function () {
    test('The restaurants array length should not be greater than 10', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, sections;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get('/discovery?lat=60.1709&lon=24.941')
                    // console.log('response',response)
                ];
                case 1:
                    response = _a.sent();
                    sections = response.body;
                    sections.forEach(function (section) {
                        expect(section.restaurants.length <= 10).toBeTruthy();
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    test('All restaurants returned by the endpoint must be closer than 1.5 kilometers from given coordinates', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, sections;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get('/discovery?lat=60.1709&lon=24.941')];
                case 1:
                    response = _a.sent();
                    sections = response.body;
                    sections.forEach(function (section) {
                        section.restaurants.forEach(function (restaurant) {
                            var distanceBetweenUserLocationAndRestaurant = helperFunctions_1.getDistanceBetweenTwoCoordinates([24.941, 60.1709], restaurant.location);
                            expect(distanceBetweenUserLocationAndRestaurant).toBeLessThan(1.5);
                        });
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    test('Open restaurants (online=true) should have precedence over closed(online=false) even if the popularity of the closed restaurant is greater than opened one ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, sections, popularRestaurants, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get('/discovery?lat=60.1709&lon=24.941')];
                case 1:
                    response = _a.sent();
                    sections = response.body;
                    popularRestaurants = sections.filter(function (section) { return section.title === 'Popular Restaurants'; })[0].restaurants;
                    for (i = 0; i < popularRestaurants.length; i++) {
                        if (popularRestaurants[i].online) {
                            expect(popularRestaurants[i].popularity >= popularRestaurants[i + 1].popularity ||
                                popularRestaurants[i + 1].online === false).toBeTruthy();
                        }
                        //online precedes over offline even if it's popular
                        if (popularRestaurants[i].online &&
                            !popularRestaurants[i + 1].online &&
                            popularRestaurants[i].popularity < popularRestaurants[i + 1].popularity) {
                            expect(popularRestaurants.indexOf(popularRestaurants[i]) < popularRestaurants.indexOf(popularRestaurants[i + 1])).toBeTruthy();
                        }
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    test('launch_date must be no older than 4 months. ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, sections, newRestaurants;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get('/discovery?lat=60.1709&lon=24.941')];
                case 1:
                    response = _a.sent();
                    sections = response.body;
                    newRestaurants = sections.filter(function (section) { return section.title === 'New Restaurants'; })[0].restaurants;
                    newRestaurants.forEach(function (restaurant) {
                        expect(date_fns_1.differenceInCalendarMonths(new Date(restaurant.launch_date), date_fns_1.startOfToday())).toBeLessThanOrEqual(4);
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    test('should not show any restaurants if the user distance is more than 1.5km from restaurant', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, sections;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get('/discovery?lat=51.509865&lon=-0.118092')];
                case 1:
                    response = _a.sent();
                    sections = response.body;
                    expect(sections.message).toBe('We are currently unavailable at your location.');
                    return [2 /*return*/];
            }
        });
    }); });
});
