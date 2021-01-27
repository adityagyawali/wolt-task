import React, { FC } from 'react'
import { Blurhash } from "react-blurhash"
import styles from './index.module.css'
import { CategoryAndRestaurant } from '../../types/index'
import excellent from '../../assets/excellent_emoji.svg'
import good from '../../assets/good_emoji.svg'

interface Props {
  allRestaurants: CategoryAndRestaurant[]
}

const DiscoveryRestaurants: FC<Props> = ({ allRestaurants }) => {
  return (
    <>
      {
        allRestaurants.map(({title, restaurants}) => {
          return (
            <div key={title} className={styles.container}>
              <div className={styles.title}>
                <h3>{title}</h3>
              </div>
              <div className={styles.restaurants}>
                {
                  restaurants.map((restaurant) => (
                    <div className={styles.restaurant__card}>
                      <div className={styles.restaurant__image}>
                        <Blurhash
                          hash={restaurant.blurhash}
                          height={300}
                          resolutionX={32}
                          resolutionY={32}
                          punch={1}
                          style={{width: '100%', minWidth: 300}}
                        />
                      </div>
                      <div className={styles.restaurant__info}>
                        <p className={styles.restaurant__name}>{restaurant.name}</p>
                      </div>
                      <div className={styles.restaurant__desc}>
                        <div className={styles.restaurant__currency}>
                          €€
                          &nbsp;·&nbsp;
                        </div>
                        <div>
                          {
                            restaurant.online ? <span style={{color: 'green', fontSize: '1rem'}}>Open</span> : <span style={{color: 'red', fontSize: '1rem'}}>Closed</span>
                          }
                        </div>
                        <div className={styles.restaurant__rating}>
                          <div className={styles.rating__icon}>
                            {
                              Number((restaurant.popularity * 10).toFixed(1)) >= 8
                              ?
                                <img className={styles.rating__emoji} src={excellent} alt='excellent'/>
                              :
                                <img className={styles.rating__emoji} src={good} alt='good'/>
                            }
                          </div>
                          <p className={styles.rating__number}>{(restaurant.popularity * 10).toFixed(1)}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
          </div>
          )
        })
      }
    </>
  )
}

export default DiscoveryRestaurants