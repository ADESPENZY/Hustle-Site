import { ArrowLeft, ArrowRight, CassetteTape, Coins, EarthLock, HandCoins } from 'lucide-react'
import React from 'react'
import ExploreCard from '../ExploreCard'
import { exploreCardData } from '@/data/exploreCards'

const Explore = () => {
  return (
    <section id="about" className='max-w-7xl mx-auto px-10 py-16 space-y-10'>
      <div className='flex justify-between items-end'>
        <div className='max-w-xl space-y-5 relative'>
            <h3 className='text-primary '>Explore Countless Benefits</h3>
            <h1 className='text-4xl md:text-5xl font-semibold'>Multi-currency & crypto wallets at your <span className='font-dancing'>disposal</span> </h1>
            <p className='text-sm text-gray-600'>Your money. Your way. Hustle gives you full control of your finances with a super secure wallet system to safeguard your funds.</p>
        </div>
        <div className='flex space-x-5'>
          <div className='rounded-full bg-gradient-to-br from-gray-300 via-white to-black  shadow-2xl h-10 w-10 flex items-center justify-center'>
            <ArrowLeft size={24} />
          </div>
          <div className='rounded-full bg-gradient-to-br from-gray-300 via-white to-black  shadow-2xl h-10 w-10 flex items-center justify-center'>
            <ArrowRight size={24} />
          </div>
        </div>
      </div>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        {exploreCardData.map((card, index) => (
          <ExploreCard key={index} {...card} />
        ))}
        
      </div>
    </section>
  )
}

export default Explore