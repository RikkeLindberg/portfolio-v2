import Head from 'next/head'
import Banner from "../components/sections/Banner";
import About from "../components/sections/About";
import Portfolio from "../components/sections/Portfolio";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rikke Lindberg</title>
        <meta name="keywords" content="front end developer" />
        <meta name="description" content="front end developer from Vesterålen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <About />
      <Portfolio />
      <Contact />
    </>
  )
}
