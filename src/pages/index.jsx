import { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Our Platform</title>
        <meta name="description" content="Landing page for our web application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Our Platform
        </h1>

        <p className={styles.description}>
          Get started by visiting our web application
        </p>

        <div className={styles.grid}>
          <a href="/app" className={styles.card}>
            <h2>Launch App &rarr;</h2>
            <p>Access our full-featured web application.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by Your Company</p>
      </footer>
    </div>
  )
} 