import React from 'react'
import { render, screen } from '@testing-library/react'
import Restaurant from '../components/Restaurant'
import { RestaurantInfo } from '../types'
import { BrowserRouter as Router } from 'react-router-dom'

const data: RestaurantInfo = {
  blurhash: 'UEL:h[|8I-OkYxTsn9r_ExOlo{s:M1eCxvkV',
  launch_date: '2020-12-08',
  location: [24.938667, 60.155196],
  name: 'Corn Place',
  online: false,
  popularity: 0.5436221040194886,
}

describe('Restaurant Component', () => {
  test('Expect restaurant component to contain restaurnat Corn', async () => {
    render(
      <Router>
        <Restaurant restaurant={data} />
      </Router>,
    )
    const restaurantNameElement = screen.getByText(/Corn Place/i)
    expect(restaurantNameElement).toBeInTheDocument()
  })
})
