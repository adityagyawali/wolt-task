import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Restaurants from '../components/Restaurants'
import { CategoryAndRestaurant } from '../types'
import { BrowserRouter as Router } from 'react-router-dom'

const data: CategoryAndRestaurant[] = [
  {
    title: 'New Restaurants',
    restaurants: [
      {
        blurhash: 'UEL:h[|8I-OkYxTsn9r_ExOlo{s:M1eCxvkV',
        launch_date: '2020-12-08',
        location: [24.938667, 60.155196],
        name: 'Corn Place',
        online: false,
        popularity: 0.5436221040194886,
      },
      {
        blurhash: 'UDSoswyZVqm.p%cRjLaKUgZ+k.kWrFZ%a$kX',
        launch_date: '2020-11-26',
        location: [24.938908, 60.160413],
        name: 'Salt',
        online: true,
        popularity: 0.8954324472876662,
      },
      {
        blurhash: 'U9O[r*?hI_VN*8yNniVx5^NhxTknY]MmX+tx',
        launch_date: '2020-11-23',
        location: [24.935659, 60.161989],
        name: 'Chili powder',
        online: true,
        popularity: 0.7353250033621942,
      },
      {
        blurhash: 'U9O[r*?hI_VN*8yNniVx5^NhxTknY]MmX+tx',
        launch_date: '2020-11-23',
        location: [24.935659, 60.161989],
        name: 'Ketchup XL',
        online: true,
        popularity: 0.7353250033621942,
      },
    ],
  },
]

describe('Restaurants component and infinite carousel', () => {
  test('show the total number of restaurants found in the section', async () => {
    const { container } = render(
      <Router>
        <Restaurants sections={data} />
      </Router>,
    )
    const totalRestaurants = container.querySelector('.restaturants__total')
    expect(totalRestaurants).toHaveTextContent('All(4)')
  })

  test('should show first element as active slider', () => {
    const { container } = render(
      <Router>
        <Restaurants sections={data} />
      </Router>,
    )

    const activeSliderElement = container.querySelector('.slick-active .restaurant__name')
    expect(activeSliderElement).toHaveTextContent(/Corn Place/)
  })

  test('should make next element active when next button is clicked', () => {
    const { container } = render(
      <Router>
        <Restaurants sections={data} />
      </Router>,
    )

    const nextButton = container.querySelector('.slick-next') as HTMLButtonElement
    fireEvent.click(nextButton)

    const activeSliderElement1 = container.querySelector('.slick-active .restaurant__name')
    expect(activeSliderElement1).toHaveTextContent(/Salt/)
  })

  test('should make last slide active when the back button is clicked', () => {
    const { container } = render(
      <Router>
        <Restaurants sections={data} />
      </Router>,
    )

    const backButton = container.querySelector('.slick-prev') as HTMLButtonElement
    fireEvent.click(backButton)

    const activeSliderElement1 = container.querySelector('.slick-active .restaurant__name')
    expect(activeSliderElement1).toHaveTextContent(/Ketchup XL/)
  })
})
