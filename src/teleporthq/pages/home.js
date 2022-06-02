import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Easy Handmade Wasp</title>
        <meta property="og:title" content="Easy Handmade Wasp" />
      </Helmet>
      <div className={styles['container1']}>
        <h1>Hello - :)</h1>
      </div>
      <AppComponent></AppComponent>
    </div>
  )
}

export default Home
