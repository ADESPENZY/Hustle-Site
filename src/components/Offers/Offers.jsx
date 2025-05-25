import React from 'react'

const Offers = () => {
  return (
    <section className='py-6 sm:py-6 md:py-10 max-w-7xl px-4 sm:px-4 md:px-10 mx-auto flex flex-col sm:flex-col md:flex-row items-center justify-between gap-4 sm:gap-4 md:gap-0'>
        <div className='space-y-1 sm:space-y-1 md:space-y-2 text-center px-4'>
            <h3 className='font-bold text-lg sm:text-lg md:text-xl'>50K+</h3>
            <p className='text-xs sm:text-xs md:text-sm'>Users Across Africa</p>
        </div>

        <div className='hidden md:block border-l border-dashed border-gray-300 h-10'></div>

        <div className='space-y-1 sm:space-y-1 md:space-y-2 text-center px-4'>
            <h3 className='font-bold text-lg sm:text-lg md:text-xl'>$25M+</h3>
            <p className='text-xs sm:text-xs md:text-sm'>Processed in Transactions</p>
        </div>

        <div className='hidden md:block border-l border-dashed border-gray-300 h-10'></div>

        <div className='space-y-1 sm:space-y-1 md:space-y-2 text-center px-4'>
            <h3 className='font-bold text-lg sm:text-lg md:text-xl'>12K+</h3>
            <p className='text-xs sm:text-xs md:text-sm'>Active StoteFronts</p>
        </div>

        <div className='hidden md:block border-l border-dashed border-gray-300 h-10'></div>

        <div className='space-y-1 sm:space-y-1 md:space-y-2 text-center px-4'>
            <h3 className='font-bold text-lg sm:text-lg md:text-xl'>24/7</h3>
            <p className='text-xs sm:text-xs md:text-sm'>Customer Support</p>
        </div>

        <div className='hidden md:block border-l border-dashed border-gray-300 h-10'></div>

        <div className='space-y-1 sm:space-y-1 md:space-y-2 text-center px-4'>
            <h3 className='font-bold text-lg sm:text-lg md:text-xl'>92%</h3>
            <p className='text-xs sm:text-xs md:text-sm'>Confirmed Growths</p>
        </div>
    </section>
  )
}

export default Offers