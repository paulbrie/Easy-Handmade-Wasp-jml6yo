import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Page - Easy Handmade Wasp</title>
        <meta property="og:title" content="Page - Easy Handmade Wasp" />
      </Helmet>
      <h1 className={styles['text']}>Hello :)</h1>
    </div>
  )
}

export default Page
