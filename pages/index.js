import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chace</title>
        <meta name="description" content="The simplest way to integrate investments in India." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
    </div>
  )
}