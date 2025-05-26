import { ArrowRight, Download } from 'lucide-react'
import React from 'react'

const Cta = () => {
  return (
    <section className='py-8 sm:py-8 md:py-16 w-full sm:w-full md:w-[80%] mx-auto'>
        <div className='flex flex-col items-center justify-center space-y-4 sm:space-y-4 md:space-y-6'>
            <div className='flex flex-col sm:flex-col md:flex-row items-center space-y-2 sm:space-y-2 md:space-y-0 md:space-x-3'>
                <div className='flex'>
                    <img
                        src="/images/heroimg1.webp"
                        alt="Hero Image 1"
                        className="h-8 w-8 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-md border-2 border-primary"
                    />
                    <img
                        src="/images/heroimg2.webp"
                        alt="Hero Image 2"
                        className="h-8 w-8 sm:h-8 sm:w-8 md:h-10 md:w-10 -mx-1 sm:-mx-1 md:-mx-2 rounded-md border-2 border-primary"
                    />
                    <img
                        src="/images/heroimg3.webp"
                        alt="Hero Image 2"
                        className="h-8 w-8 sm:h-8 sm:w-8 md:h-10 md:w-10 -mx-1 sm:-mx-1 md:-mx-2 rounded-md border-2 border-primary"
                    />
                    <img
                        src="/images/heroimg1.webp"
                        alt="Hero Image 2"
                        className="h-8 w-8 sm:h-8 sm:w-8 md:h-10 md:w-10 -mx-1 sm:-mx-1 md:-mx-2 rounded-md border-2 border-primary"
                    />
                    <img
                        src="/images/heroimg3.webp"
                        alt="Hero Image 3"
                        className="h-8 w-8 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-md border-2 border-primary"
                    />
                </div>
                <p className='text-sm sm:text-sm md:text-md text-primary'>Trusted By 30K+ Users</p>
            </div>
            <h1 className='font-semibold text-center text-4xl sm:text-5xl md:text-8xl mt-2 sm:mt-2 md:mt-3'>You <span className='font-dancing'>can’t</span> go wrong with Hustle App</h1>
            <div className="flex flex-col sm:flex-col md:flex-row items-center space-y-2 sm:space-y-2 md:space-y-0 md:space-x-4">
                <div className="flex items-center space-x-1 sm:space-x-1 md:space-x-2 bg-primary text-white py-2 sm:py-1 md:py-2 px-3 sm:px-3 md:px-4 rounded-md hover:bg-secondary transition-colors text-xs sm:text-xs md:text-base">
                    <span>Download Hustle</span>
                    <Download size={16} sm:size={16} md:size={20} />
                </div>
                <div className="flex items-center bg-black py-2 sm:py-1 md:py-2 px-3 sm:px-3 md:px-4 rounded-md space-x-1 sm:space-x-1 md:space-x-2 text-white font-medium hover:text-secondary transition-colors text-xs sm:text-xs md:text-base">
                    <span>Visit Marketplace</span>
                    <ArrowRight size={16} sm:size={16} md:size={20} />
                </div>
            </div>
        </div>
        <div className='border-b-2 border-[#f9f9f9] w-full my-6 sm:my-6 md:my-10'></div>
        <footer className='bg-[#f9f9f9] rounded-2xl p-2 flex flex-col sm:flex-col md:flex-row'>
            <div className='w-full sm:w-full md:w-1/3 m-3 sm:m-3 md:m-5 space-y-4 sm:space-y-4 md:space-y-5'>
                <div>
                    <img
                        className="w-12 h-3 sm:w-12 sm:h-3 md:w-16 md:h-4"
                        src="/images/Hustle.png"
                        alt="Hustle Logo"
                    />
                </div>
                <h2 className='text-xs sm:text-xs md:text-sm text-gray-400 max-w-48 sm:max-w-48 md:max-w-56'>With encrypted transactions, two-factor authentication, and fraud protection, your money is always safe.</h2>
            </div>
            <div className='w-full sm:w-full md:w-2/3 bg-white p-3 sm:p-3 md:p-5 rounded-2xl flex flex-col sm:flex-col md:flex-row justify-between space-y-6 sm:space-y-6 md:space-y-0'>
                <div className='space-y-6 sm:space-y-6 md:space-y-8'>
                    <h2 className='text-sm sm:text-sm md:text-md font-semibold'>Other Products</h2>
                    <ul className='space-y-3 sm:space-y-3 md:space-y-5 text-[10px] sm:text-[10px] md:text-xs text-gray-400 font-semibold'>
                        <li>Kavir</li>
                        <li>Nectar</li>
                        <li>---</li>
                        <li>---</li>
                    </ul>
                </div>
                <div className='space-y-6 sm:space-y-6 md:space-y-8'>
                    <h2 className='text-sm sm:text-sm md:text-md font-semibold'>Socials</h2>
                    <ul className='space-y-3 sm:space-y-3 md:space-y-5 text-[10px] sm:text-[10px] md:text-xs text-gray-400 font-semibold'>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Snapchat</li>
                        <li>X</li>
                    </ul>
                </div>
                <div className='space-y-6 sm:space-y-6 md:space-y-8'>
                    <h2 className='text-sm sm:text-sm md:text-md font-semibold'>Regulations</h2>
                    <ul className='space-y-3 sm:space-y-3 md:space-y-5 text-[10px] sm:text-[10px] md:text-xs text-gray-400 font-semibold'>
                        <li>Privacy Policy</li>
                        <li>Terms And Conditions</li>
                        <li>Cookies</li>
                        <li>CCPA Policy</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-[10px] sm:text-[10px] md:text-xs text-gray-400 font-semibold'>@ 2025 Hustle</h2>
                </div>
            </div>
        </footer>
    </section>
  )
}

export default Cta