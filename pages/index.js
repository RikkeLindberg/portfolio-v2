import Head from 'next/head'
import Banner from "../components/sections/Banner";
import About from "../components/sections/About";
import Portfolio from "../components/sections/Portfolio";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="front end developer" />
        <meta name="description" content="front end developer from Vesterålen" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Rikke Lindberg</title>
      </Head>
      <Banner />
      <About />
      <Portfolio />
      <Contact />
    </>
  )
}
