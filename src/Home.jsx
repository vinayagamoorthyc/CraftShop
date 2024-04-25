import React from 'react'
import NavBar from './components/NavBar';
import Intro from './components/intro';
import Feature from './components/Feature';
import Popular from './components/Popular';
import Contact from './components/Contact';
import Recent from './components/Recent';

export default function Home() {
  return (
    <div>
        <NavBar/>
        <Intro/>
        <Feature/>
        <Popular/>
        <Contact/>
        <Recent/>
    </div>
  )
}
