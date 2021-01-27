export interface Restaurant {
  blurhash: string
  launch_date: string
  location: number[]
  name: string
  online: boolean
  popularity: number
}

export interface CategoryAndRestaurants {
  title: string
  restaurants: Restaurant[]
}

export interface RestaurantsNotFound extends CategoryAndRestaurants {
  message: string
}
