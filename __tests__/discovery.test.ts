import app from '../server'
import supertest from 'supertest'
import { CategoryAndRestaurants, RestaurantsNotFound } from '../types'
import { getDistanceBetweenTwoCoordinates } from '../utils/helperFunctions'
import { differenceInCalendarMonths, startOfToday } from 'date-fns'

const api = supertest(app)

describe('GET /discovery - a simple api endpoint', () => {
  test('The restaurants array length should not be greater than 10', async () => {
    const response = await api.get('/discovery?lat=60.1709&lon=24.941')
    // console.log('response',response)
    const sections: CategoryAndRestaurants[] = response.body
    sections.forEach((section) => {
      expect(section.restaurants.length <= 10).toBeTruthy()
    })
  })

  test('All restaurants returned by the endpoint must be closer than 1.5 kilometers from given coordinates', async () => {
    const response = await api.get('/discovery?lat=60.1709&lon=24.941')
    const sections: CategoryAndRestaurants[] = response.body
    sections.forEach((section) => {
      section.restaurants.forEach((restaurant) => {
        const distanceBetweenUserLocationAndRestaurant = getDistanceBetweenTwoCoordinates(
          [24.941, 60.1709],
          restaurant.location,
        )
        expect(distanceBetweenUserLocationAndRestaurant).toBeLessThan(1.5)
      })
    })
  })

  test('Open restaurants (online=true) should have precedence over closed(online=false) even if the popularity of the closed restaurant is greater than opened one ', async () => {
    const response = await api.get('/discovery?lat=60.1709&lon=24.941')
    const sections: CategoryAndRestaurants[] = response.body
    const popularRestaurants = sections.filter((section) => section.title === 'Popular Restaurants')[0].restaurants

    for (let i = 0; i < popularRestaurants.length; i++) {
      if (popularRestaurants[i].online) {
        expect(
          popularRestaurants[i].popularity >= popularRestaurants[i + 1].popularity ||
            popularRestaurants[i + 1].online === false,
        ).toBeTruthy()
      }

      //online precedes over offline even if it's popular
      if (
        popularRestaurants[i].online &&
        !popularRestaurants[i + 1].online &&
        popularRestaurants[i].popularity < popularRestaurants[i + 1].popularity
      ) {
        expect(
          popularRestaurants.indexOf(popularRestaurants[i]) < popularRestaurants.indexOf(popularRestaurants[i + 1]),
        ).toBeTruthy()
      }
    }
  })

  test('launch_date must be no older than 4 months. ', async () => {
    const response = await api.get('/discovery?lat=60.1709&lon=24.941')
    const sections: CategoryAndRestaurants[] = response.body
    const newRestaurants = sections.filter((section) => section.title === 'New Restaurants')[0].restaurants
    newRestaurants.forEach((restaurant) => {
      expect(differenceInCalendarMonths(new Date(restaurant.launch_date), startOfToday())).toBeLessThanOrEqual(4)
    })
  })

  test('should not show any restaurants if the user distance is more than 1.5km from restaurant', async () => {
    const response = await api.get('/discovery?lat=51.509865&lon=-0.118092')
    const sections: RestaurantsNotFound = response.body
    expect(sections.message).toBe('We are currently unavailable at your location.')
  })
})
