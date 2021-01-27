import React from 'react'
import no_delivery from '../../assets/no_location_found.svg'
import styles from './index.module.css'

const NotFound = () => {
  return (
    <div className={styles.discover_page}>
      <div className={styles.no_address_img}>
        <img src={no_delivery} alt="no address found" />
      </div>
      <p className={styles.info}>Hey! Looks like you are in wrong place 😌</p>
      <p className={styles.sub_info}>Please go to homepage to see restaurants in Helsinki region.</p>
      <p>Right now we are only open in Helsinki area. We are planning to extend our service in many other regions soon.</p>
    </div>
  )
}

export default NotFound
