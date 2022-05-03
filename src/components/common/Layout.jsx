import React from 'react'
import Home from '../pages/Home/Home'
import Header from './Header/Header'

import styles from './Layout.module.scss'

function Layout({children}) {
  return (
	<div className={styles.wrapper}>
	  <Header />
    {children}
	</div>
  )
}

export default Layout
