import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about'
import Features from '../components/features'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Process from '../components/process'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chace</title>
        <meta name="description" content="The simplest way to integrate investments in India." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Process />
      <Footer />
    </div>
  )
}
