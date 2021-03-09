import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { RestaurantInfo } from '../../types'
const SingleRestaurant = () => {
  const { name } = useParams<{ name: string }>()
  console.log({ name })
  useEffect(() => {
    const singleRestaurant = async () => {
      const { data } = await axios.get<RestaurantInfo>(`http://localhost:8000/discovery/${name}`)
      console.log({ data })
    }

    void singleRestaurant()
  })
  return <div>Single Restaurant</div>
}

export default SingleRestaurant
