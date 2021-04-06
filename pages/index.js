import Head from 'next/head'
import Landingpage from "../components/sections/Landingpage";
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
      <Landingpage />
      <About />
      <Portfolio />
      <Contact />
    </>
  )
}
