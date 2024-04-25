import React from 'react'
import NavBar from './components/NavBar';
import Intro from './components/intro';
import Feature from './components/Feature';

export default function Home() {
  return (
    <div>
        <NavBar/>
        <Intro/>
        <Feature/>
    </div>
  )
}
