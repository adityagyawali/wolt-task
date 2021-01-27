export interface RestaurantInfo {
  blurhash: string,
  launch_date: string,
  location: number[],
  name: string,
  online: boolean,
  popularity: number
}

export interface CategoryAndRestaurant {
  title: string,
  restaurants: RestaurantInfo[]
}
