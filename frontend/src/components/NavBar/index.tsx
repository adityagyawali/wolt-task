import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/wolt_logo_black.svg'
import user from '../../assets/user.svg'
import styles from  './index.module.css'

const NavBar = () => {
  return (
    <div className={styles.navbar__container}>
      <div className={styles.navbar}>
        <Link to="/">
          <div className={styles.navbar__logo}>
            <img className={styles.logo} src={logo} alt="wolt logo" />
          </div>
        </Link>

        <div className={styles.user}>
          <p className={styles.user__login}>Login</p>
          <p className={styles.user__signup}>Signup</p>
        </div>
        <div className={styles.user__mobile}>
          <img src={user} alt="user logo" className={styles.user__logo} />
        </div>
      </div>
    </div>
  )
}

export default NavBar
