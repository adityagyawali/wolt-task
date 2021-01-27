import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.css'

const LandingPage = () => {
  const [index, setIndex] = useState<number>(0)
  const titles: string[] = ['From your favourite restaurant to your home!', 'Hungry after a jog?', 'Friends coming over?', 'Pre-order for tomorrow?']

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index < titles.length - 1 ? index + 1 : 0)
    }, 3000)
    return () => clearInterval(interval)
  }, [index, titles.length])

  return (
    <div className={styles.landing__page}>
      <div className={styles.landing__page__content}>
        <div className={styles.landing__page__title}>
          {titles.map((title, idx) => (
            <h1 key={title} className={`${styles.title__content}, ${idx === index ? styles.active : styles.hidden}`}>
              {title}
            </h1>
          ))}
        </div>
        <p className={styles.landing__page__subtitle}>DISCOVER RESTAURANTS IN</p>
        <NavLink className={styles.landing__page__link} to="/restaurants">
          <button className={styles.landing__page__button}>Helsinki</button>
        </NavLink>
      </div>
    </div>
  )
}

export default LandingPage
