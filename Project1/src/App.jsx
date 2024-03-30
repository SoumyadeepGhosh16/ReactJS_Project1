import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Featured2 from './components/Featured2'
import Cards from './components/Cards'
import Footer from './components/Footer'


import LocomotiveScroll from 'locomotive-scroll';




function App() {

  const locomotiveScroll = new LocomotiveScroll();


  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 text-white">
        <Navbar/>
        <LandingPage/>
        <Marquee/>
        <About/>
        <Eyes/>
        <Featured/>
        <Featured2/>
        <Cards/>
        <Footer/>
      </div>
    </>
  )
}

export default App
