import React, { FC, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Restaurants from './components/Restaurants'
import { CategoryAndRestaurant } from './types'
import LandingPage from './pages/LandingPage'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'
import DiscoveryRestaurants from './components/DiscoveryRestaurants'

const App: FC = () => {
  const [sections, setSections] = useState<CategoryAndRestaurant[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [nearByResturants, setNearByResturants] = useState<CategoryAndRestaurant[]>([])
  const [newResturants, setNewResturants] = useState<CategoryAndRestaurant[]>([])
  const [popularResturants, setPopularResturants] = useState<CategoryAndRestaurant[]>([])

  const filterResturants = (resturants: CategoryAndRestaurant[], category: string): CategoryAndRestaurant[] => {
    return resturants.filter((resturant) => resturant.title === category)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<CategoryAndRestaurant[]>('/discovery?lat=60.1709&lon=24.941')
        setSections(data)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const filteredNearByResturants = filterResturants(sections, 'Nearby Restaurants')
    const filteredNewResturants = filterResturants(sections, 'New Restaurants')
    const filteredPopularResturants = filterResturants(sections, 'Popular Restaurants')
    setNearByResturants(filteredNearByResturants)
    setNewResturants(filteredNewResturants)
    setPopularResturants(filteredPopularResturants)
  }, [sections])

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <div className="App">
          <Route exact path="/nearby-restaurants">
            <DiscoveryRestaurants allRestaurants={nearByResturants} />
          </Route>
          <Route exact path="/new-restaurants">
            <DiscoveryRestaurants allRestaurants={newResturants} />
          </Route>
          <Route exact path="/popular-restaurants">
            <DiscoveryRestaurants allRestaurants={popularResturants} />
          </Route>
          <Route exact path="/restaurants">
            {loading ? <h1>Loading...</h1> : <Restaurants sections={sections} />}
          </Route>
        </div>
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
