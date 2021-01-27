import express, { Request, Response } from 'express'
import { differenceInCalendarMonths, startOfToday } from 'date-fns'
import { Restaurant, CategoryAndRestaurants } from '../types'
import {
  findRestaurantsBasedOnCoordinates,
  getDistanceBetweenTwoCoordinates,
  sortRestaurantsBasedOnAvailability,
} from '../utils/helperFunctions'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  const lon = Number(req.query.lon)
  const lat = Number(req.query.lat)
  const userLocation: number[] = [lon, lat]

  // find restaurants within 1.5km
  const allRestaurants: Restaurant[] = findRestaurantsBasedOnCoordinates(userLocation)

  // if no resturants are found within 1.5km then send unavailable message
  if (!allRestaurants.length) {
    return res.status(404).json({ message: 'We are currently unavailable at your location.' })
  }

  // sort restaurants(max 10) based on popularity when the total restaurants with 1.5km
  const popularRestaurants: Restaurant[] = allRestaurants
    .sort((a, b) => {
      return b.popularity - a.popularity
    })
    .slice(0, 10)

  //new restaurants that were opened less than 4 months ago
  const newRestaurants: Restaurant[] = allRestaurants
    .filter((resturant) => {
      const currentDate: Date = startOfToday()
      const launchDate: Date = new Date(resturant.launch_date)
      const totalMonthsResturantIsOpen = differenceInCalendarMonths(currentDate, launchDate)
      if (totalMonthsResturantIsOpen <= 4) {
        return resturant
      }
      return false
    })
    .sort((a, b) => {
      return b.popularity - a.popularity
    })
    .slice(0, 10)

  //get restaurants(max 10) closest to the current location
  const nearByRestaurants: Restaurant[] = allRestaurants
    .sort((a, b) => {
      return (
        getDistanceBetweenTwoCoordinates(userLocation, a.location) -
        getDistanceBetweenTwoCoordinates(userLocation, b.location)
      )
    })
    .slice(0, 10)

  const sections: CategoryAndRestaurants[] = [
    {
      title: 'Popular Restaurants',
      restaurants: sortRestaurantsBasedOnAvailability(popularRestaurants),
    },
    {
      title: 'New Restaurants',
      restaurants: sortRestaurantsBasedOnAvailability(newRestaurants),
    },
    {
      title: 'Nearby Restaurants',
      restaurants: sortRestaurantsBasedOnAvailability(nearByRestaurants),
    },
  ]

  res.status(200).json(sections)
})

export default router
