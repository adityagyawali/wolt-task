import React, { FC } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CategoryAndRestaurant } from '../../types/index'
import Restaurant from '../Restaurant'

interface Props {
  sections: CategoryAndRestaurant[]
}

const Restaurants: FC<Props> = ({ sections }) => {
  const settings = {
    arrows: true,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '10px',
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <div className={styles.restaurants__container}>
      {sections.map(({ title, restaurants }) => {
        return (
          <div className={styles.restaurants} key={title}>
            <div className={styles.restaurants__header}>
              <h3 className={styles.restaurants__title}>{title}</h3>
              <Link className={styles.restaurants__link} to={title.toLowerCase().replace(' ', '-')}>
                <p className={styles.restaturants__total}>All({restaurants.length})</p>
              </Link>
            </div>
            <Slider {...settings} className={styles.restaurants__carousel}>
              {restaurants.map((restaurant) => (
                <div key={restaurant.name} className={styles.restaurant}>
                  <Restaurant restaurant={restaurant} />
                </div>
              ))}
            </Slider>
          </div>
        )
      })}
    </div>
  )
}

export default Restaurants
