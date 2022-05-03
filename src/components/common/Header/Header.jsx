import React from 'react'
import styles from './Header.module.scss'

import imgUser from '../../../images/header/user.svg'
import imgHamburger from '../../../images/header/hamburger.svg'

function Header() {
  return (
	<div className={styles.header}>
    <button type='button'>
      <img src={imgUser} alt='user' /> 
      
    </button>
    Привет Мирок !
    <button type='button'>
      <img src={imgHamburger} alt='hamburger' /> 
    </button>
	</div>
  )
}

export default Header
