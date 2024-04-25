import React from 'react'
import NavBar from './components/NavBar';
import Intro from './components/intro';
import Feature from './components/Feature';
import Popular from './components/Popular';
import Contact from './components/Contact';
import Recent from './components/Recent';
import Offers from './components/Offers';
import About from './components/About';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
        <NavBar/>
        <Intro/>
        <Feature/>
        <Offers/>
        <Popular/>
        <Contact/>
        <Recent/>
        <About/>
        <Footer/>
    </div>
  )
}
