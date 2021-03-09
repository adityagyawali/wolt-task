import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { RestaurantInfo } from '../../types'
const SingleRestaurant = () => {
  const [singleRestaurant, setSingleRestaurant] = useState<RestaurantInfo>()
  const { name } = useParams<{ name: string }>()
  console.log({ name })
  useEffect(() => {
    const singleRestaurant = async () => {
      try {
        const { data } = await axios.get<RestaurantInfo>(`/discovery/${name}`)
        setSingleRestaurant(data)
      } catch (error) {
        console.log(error)
      }
    }

    void singleRestaurant()
  }, [name])
  return <h1>{singleRestaurant?.name}</h1>
}

export default SingleRestaurant
