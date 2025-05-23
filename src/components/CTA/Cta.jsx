import { ArrowRight, Download } from 'lucide-react'
import React from 'react'

const Cta = () => {
  return (
    <section className='py-16 md:w-[80%]  mx-auto'>
        <div className='flex flex-col items-center justify-center space-y-6 '>
             <div className='flex items-center space-x-3 '>
                <div className="flex">
                    <img
                        src="/images/heroimg1.webp"
                        alt="Hero Image 1"
                        className="h-10 w-10 rounded-md border-2 border-primary"
                    />
                    
                    <img
                        src="/images/heroimg2.webp"
                        alt="Hero Image 2"
                        className="h-10 w-10 -mx-2 rounded-md border-2 border-primary"
                    />
                    <img
                        src="/images/heroimg3.webp"
                        alt="Hero Image 2"
                        className="h-10 w-10 -mx-2 rounded-md border-2 border-primary"
                    />
                    <img
                        src="/images/heroimg1.webp"
                        alt="Hero Image 2"
                        className="h-10 w-10 -mx-2 rounded-md border-2 border-primary"
                    />
                    <img
                        src="/images/heroimg3.webp"
                        alt="Hero Image 3"
                        className="h-10 w-10 rounded-md border-2 border-primary"
                    />
                </div>
                <p className='text-md text-primary'>Trusted By 30K+ Users</p>
            </div>
            <h1 className='font-semibold text-center text-8xl mt-3'>You <span className='font-dancing'>can’t</span> go wrong with Hustle App</h1>
            <div className="hidden md:flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors">
                    <span>Download Hustle</span>
                    <Download size={20} />
                </div>
                <div className="flex items-center bg-black py-2 px-4 rounded-md space-x-2 text-white font-medium hover:text-secondary transition-colors" >
                    <span>Visit Marketplace</span>
                    <ArrowRight size={20} />
                </div>
            </div>
        </div>
        <div className='border-b-2 border-[#f9f9f9] w-full my-10'></div>
        <footer className='bg-[#f9f9f9] rounded-2xl p-2 flex '>
            <div className='w-1/3 m-5 space-y-5'>
                <div>
                    <img
                        className="w-16 h-4"
                        src="/images/Hustle.png"
                        alt="Hustle Logo"
                    />
                </div>
                <h2 className='text-sm text-gray-400 max-w-56 '>With encrypted transactions, two-factor authentication, and fraud protection, your money is always safe.</h2>
            </div>
            <div className='w-2/3 bg-white p-5 rounded-2xl flex justify-between '>
                <div className='space-y-8'>
                    <h2 className='text-md font-semibold'>Other Products</h2>
                    <ul className='space-y-5 text-xs text-gray-400 font-semibold'>
                        <li>Kavir</li>
                        <li>Nectar</li>
                        <li>---</li>
                        <li>---</li>
                    </ul>

                </div>
                <div className='space-y-8'>
                    <h2 className='text-md font-semibold'>Socials</h2>
                    <ul className='space-y-5 text-xs text-gray-400 font-semibold'>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Snapchat</li>
                        <li>X</li>
                    </ul>

                </div>
                <div className='space-y-8'>
                    <h2 className='text-md font-semibold'>Regulations</h2>
                    <ul className='space-y-5 text-xs text-gray-400 font-semibold'>
                        <li>Privacy Policy</li>
                        <li>Terms And Conditions</li>
                        <li>Cookies</li>
                        <li>CCPA Policy</li>
                    </ul>

                </div>
                <div>
                    <h2 className='text-gray-400 font-semibold'>@ 2025 Hustle</h2>
                </div>
                
            </div>
        </footer>
    </section>
  )
}

export default Cta