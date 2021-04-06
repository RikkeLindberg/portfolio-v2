import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rikke Lindberg</title>
        <meta name="keywords" content="front end developer" />
        <meta name="description" content="front end developer from Vesterålen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>hello</h1>
      </div>
    </div>
  )
}
