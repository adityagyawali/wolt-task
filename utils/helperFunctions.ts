import allRestaurants from './restaurants.json'
import { Restaurant } from '../types/index'

// gets the distance(as a straight line) in km between two coordinates
//source https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates
export function getDistanceBetweenTwoCoordinates(userLocation: number[], restaurantLocation: number[]): number {
  const lon1 = userLocation[0]
  const lat1 = userLocation[1]
  const lon2 = restaurantLocation[0]
  const lat2 = restaurantLocation[1]
  const R = 6371 // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1) // deg2rad below
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c // Distance in km
  return d
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180)
}

// get all the restaurants within 1.5km from user location
export function findRestaurantsBasedOnCoordinates(userLocation: number[]): Restaurant[] | [] {
  const restaurantsNearToUser = allRestaurants.restaurants.filter((restaurant) => {
    const distanceBetweenUserLocationAndRestaurant = getDistanceBetweenTwoCoordinates(userLocation, restaurant.location)
    if (distanceBetweenUserLocationAndRestaurant < 1.5) {
      return restaurant
    }
    return
  })
  return restaurantsNearToUser
}

// Restaurant online: true takes precedence over online: false
export function sortRestaurantsBasedOnAvailability(restaurants: Restaurant[]): Restaurant[] {
  const offlineRestaurants = []
  const onlineRestaurants = []
  for (let i = 0; i < restaurants.length; i++) {
    if (restaurants[i].online) {
      onlineRestaurants.push(restaurants[i])
    } else {
      offlineRestaurants.push(restaurants[i])
    }
  }

  return [...onlineRestaurants, ...offlineRestaurants]
}
