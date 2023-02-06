import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home(){
  return(
    <div className={styles.container}>
      <Head>
        <title>Next.js Bukhobethu</title>
        <meta name="description" content="Bukhobethu's Portfolio" />
      </Head>
      
      <div class="topnav">
        <a href="/" class="Active">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to Bukhobethu's website
      </h1>

    <p><Image src="/Bukho.jpg" alt="Logo" width="500" height="500" /></p>

    </main>

    </div>
  )
}