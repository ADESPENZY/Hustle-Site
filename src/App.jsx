import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Explore from './components/Explore/Explore'
import Expand from './components/Expand/Expand'
import Offers from './components/Offers/Offers'
import Fueling from './components/Fueling/Fueling'
import Testimonial from './components/Testimonial/Testimonial'
import Enterpreneur from './components/Enterpreneur/Enterpreneur'
import Cta from './components/CTA/Cta'
import { Toaster } from 'react-hot-toast';

function App() {
 
  return (
    
    <div className='font-inter'>
        <Toaster position="top-right" reverseOrder={false} />
        <section className='border-b border-gray-600 '>
          <Navbar/>
        </section>
        <HeroSection/>
        <Explore/>
        <section id='features' className='bg-[#0C0E1A]'>
          <Expand/>
        </section>
        <Offers/>
        <Fueling/>
        <Testimonial/>
        <section id='solutions' className='bg-[#0C0E1A]'>
          <Enterpreneur/>
        </section>
        <Cta/>
    </div>
  )
}

export default App
