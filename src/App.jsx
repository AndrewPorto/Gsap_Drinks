import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero/>
    </main>
  )
}
