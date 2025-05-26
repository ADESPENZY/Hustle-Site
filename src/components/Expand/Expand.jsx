import { ArrowRight, Bell, Check, ChevronDown, Download, Heart, Search, ShoppingCart, Star, StarHalf } from 'lucide-react'
import React from 'react'
import { Link } from 'react-scroll'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const Expand = () => {
  return (
    <section className='max-w-7xl mx-auto pt-16 px-5 md:px-10'>
        <div className='max-w-5xl mx-auto grid grid-cols-3 gap-8 '>
            <div className='h-3 bg-primary rounded-full animate-glow'></div>
            <div className='h-3 bg-primary rounded-full animate-glow'></div>
            <div className='h-3 bg-primary rounded-full animate-glow'></div>
        </div>
        <div className='flex flex-col md:flex-row items-end md:space-y-0 space-y-10 justify-between mt-8 md:mt-16'>
            <div className='max-w-md text-white space-y-5'>
                <h1 className='text-4xl md:text-5xl font-semibold'>Expand your business horizons using <span className='font-dancing'>Hustle</span></h1>
                <div className='flex md:flex-row flex-col md:space-x-2'>
                    <div className='flex space-x-2 items-center text-gray-200'>
                        <Check size={14} className='text-primary' />
                        <p className='text-xs'>Usable On Web</p>
                    </div>
                    <div className='flex space-x-2 items-center text-gray-200'>
                        <Check size={14} className='text-primary' />
                        <p className='text-xs'>Setup In Three minutes</p>
                    </div>
                    <div className='flex space-x-2 items-center text-gray-200'>
                        <Check size={14} className='text-primary' />
                        <p className='text-xs'>Sell Your Product</p>
                    </div>
                </div>
                <div className='flex space-x-4'>
                    <div className='flex -space-x-2'>
                        <div className='w-10 h-10 border border-white rounded-full bg-black flex justify-center items-center text-white'>
                            <img src="images/playstore-logo.png" alt="" className='w-8 h-8' />
                        </div>
                        <div className='w-10 h-10 border border-white rounded-full bg-black flex justify-center items-center text-white'>
                            <img src="images/apple-logo.png" alt="" className='w-8 h-8' />
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <h4>4.5 from 378 reviews</h4>
                        <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <StarHalf className="w-4 h-4 fill-current" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-5 max-w-md'>
                <div className='flex flex-col md:flex-row items-center space-y-3 md:space-y-0 space-x-3'>
                    <div className="flex">
                        <img
                            src="/images/heroimg1.webp"
                            alt="Hero Image 1"
                            className="h-8 w-8 rounded-md border-2 border-primary"
                        />
                        
                        <img
                            src="/images/heroimg2.webp"
                            alt="Hero Image 2"
                            className="h-8 w-8 -mx-2 rounded-md border-2 border-primary"
                        />
                        <img
                            src="/images/heroimg3.webp"
                            alt="Hero Image 3"
                            className="h-8 w-8 rounded-md border-2 border-primary"
                        />
                    </div>
                    <p className='text-md text-primary'>JOIN 20,000 PEOPLE IN SELLING STUFFS</p>
                </div>
                <p className='text-md text-center md:text-start text-gray-400'>Whether you’re a product seller, service provider, or content creator, Hustle gives you the tools to grow your digital business with ease</p>
                <div className="flex items-center justify-center space-x-2 bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors">
                    <span>Visit Marketplace</span>
                    <ArrowRight size={20} />
                </div>
            </div>
        </div>
        <div className=' hidden md:block bg-[#14182E] px-5 sm:px-5 md:px-10 rounded-2xl mt-16'>
            <div className='flex items-center justify-center relative h-28'>
                {/* Purple background base */}
                <div className='bg-primary w-5/12 h-full animate-glow'></div>
                {/* Blue overlay centered on top */}
                <div className='bg-[#14182E] absolute left-1/2 top-0 -translate-x-1/2 w-44 h-10 animate-glow'></div>
            </div>
            <div className='bg-white p-5 border-2 border-primary shadow-2xl shadow-primary rounded-2xl'>
                <nav className='flex flex-col sm:flex-col md:flex-row justify-between items-center space-y-4 sm:space-y-4 md:space-y-0'>
                    <div className='flex flex-col sm:flex-col md:flex-row items-center space-y-4 sm:space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto'>
                        <div>
                            <img
                                className="w-12 h-3 sm:w-12 sm:h-3 md:w-16 md:h-4"
                                src="/images/Hustle.png"
                                alt="Hustle Logo"
                            />
                        </div>
                        <div className='flex flex-col sm:flex-col md:flex-row items-center space-y-2 sm:space-y-2 md:space-y-0 md:space-x-2 w-full'>
                            {/* Search Bar */}
                            <div className="flex items-center border border-gray-300 rounded-md px-2 w-full max-w-xs sm:max-w-xs md:max-w-md bg-white">
                                <Search className="text-gray-500 w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-2" />
                                <Input
                                    type="text"
                                    placeholder="Search a product"
                                    className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0 text-sm sm:text-sm md:text-base"
                                />
                            </div>
                            {/* Search Button */}
                            <Button className="w-full sm:w-auto md:ml-2 bg-primary py-1 text-sm sm:text-sm md:text-base">
                                Search
                            </Button>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-col md:flex-row items-center space-y-3 sm:space-y-3 md:space-y-0 md:space-x-3 w-full md:w-auto'>
                        <div className='flex space-x-2'>
                            <Heart className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-700 cursor-pointer hover:text-primary" />
                            <ShoppingCart className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-700 cursor-pointer hover:text-primary" />
                            <Bell className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-700 cursor-pointer hover:text-primary" />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div className='w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gray-600 flex justify-center items-center text-white'>
                                <img src="images/playstore-logo.png" alt="" className='w-7 h-7 sm:w-7 sm:h-7 md:w-8 md:h-8' />
                            </div>
                            <h2 className='text-sm sm:text-sm md:text-base'>Joshua Atoyebi</h2>
                        </div>
                    </div>
                </nav>
                <div className='flex flex-col sm:flex-col md:flex-row gap-4 mt-6 sm:mt-6 md:mt-10'>
                    <aside className="w-full sm:w-full md:w-1/5">
                        <h2 className="font-bold mb-4 sm:mb-4 md:mb-6 text-base sm:text-base md:text-lg">Product Filter</h2>
                        {/* Gadgets */}
                        <div className='mb-4 md:block hidden'>
                            <h2 className="text-xs sm:text-xs md:text-sm flex items-center space-x-2 mb-4">Gadgets <ChevronDown className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4" /></h2>
                            <ul className="space-y-3 sm:space-y-3 md:space-y-4">
                                <li className="flex items-center space-x-3">
                                    <span className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 rounded-sm bg-gray-200" />
                                    <span className='text-xs sm:text-xs md:text-xs'>Apple Watch</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 rounded-sm bg-gray-200" />
                                    <span className='text-xs sm:text-xs md:text-xs'>Macbook</span> 
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 rounded-sm bg-blue-500 border border-gray-400" />
                                    <span className='text-xs sm:text-xs md:text-xs'>Gaming Pc</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 rounded-sm bg-gray-200" />
                                    <span className='text-xs sm:text-xs md:text-xs'>Phone Stand</span>
                                </li>
                            </ul>
                        </div>
                        {/* Clothes */}
                        <div className='mb-4 md:block hidden'>
                            <h2 className="text-xs sm:text-xs md:text-sm flex items-center space-x-2 mb-4">Clothes <ChevronDown className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4" /></h2>
                            <ul className="space-y-3 sm:space-y-3 md:space-y-4">
                                <li className="flex items-center space-x-3">
                                    <span className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 rounded-sm bg-gray-200" />
                                    <span className='text-xs sm:text-xs md:text-xs'>Jacket</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 rounded-sm bg-gray-200" />
                                    <span className='text-xs sm:text-xs md:text-xs'>Sneakers</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 rounded-sm bg-gray-200" />
                                    <span className='text-xs sm:text-xs md:text-xs'>Hat</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 rounded-sm bg-gray-200" />
                                    <span className='text-xs sm:text-xs md:text-xs'>Shirt</span>
                                </li>
                            </ul>
                        </div>
                        {/* Others */}
                        <div>
                            <h2 className="text-xs sm:text-xs md:text-sm flex items-center space-x-2 mb-3">Others <ChevronDown className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4" /></h2>
                            <ul className="space-y-3 sm:space-y-3 md:space-y-4">
                                <li className="flex items-center space-x-3">
                                    <span className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 rounded-sm bg-gray-200" />
                                    <span className='text-xs sm:text-xs md:text-xs'>Gift Cards</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 rounded-sm bg-gray-200" />
                                    <span className='text-xs sm:text-xs md:text-xs'>Stationery</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 rounded-sm bg-gray-200" />
                                    <span className='text-xs sm:text-xs md:text-xs'>Water Bottles</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 rounded-sm bg-gray-200" />
                                    <span className='text-xs sm:text-xs md:text-xs'>Accessories</span>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <article className='w-full sm:w-full md:w-3/5'>
                        <div className='w-full relative'>
                            <img
                                src="images/hustleimg13.webp"
                                alt=""
                                className='h-48 sm:h-48 md:h-72 w-full rounded-2xl object-cover'
                            />
                            {/* Text on top-left of the image */}
                            <div className="absolute w-48 sm:w-48 md:w-56 top-4 sm:top-4 md:top-8 left-4 sm:left-4 md:left-8 text-white text-xs sm:text-xs md:text-sm px-2 sm:px-2 md:px-3 py-1 rounded-md space-y-2 sm:space-y-2 md:space-y-4">
                                <img src="images/hustle-icon.png" alt="" className='h-6 w-6 sm:h-6 sm:w-6 md:h-8 md:w-8' />
                                <h2 className='w-32 sm:w-32 md:w-36 font-normal text-base sm:text-base md:text-xl'>Download The Hustle App & Get <span className='text-primary'>N10,000</span></h2>
                                <div className='bg-white/20 py-1 px-2 sm:px-2 md:px-3 flex items-center rounded-full space-x-2 sm:space-x-2 md:space-x-3'>
                                    <ShoppingCart className='w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4' />
                                    <p className='text-[10px] sm:text-[10px] md:text-xs'>20% off on Every Product</p>
                                </div>
                                <div className="flex w-fit items-center space-x-1 sm:space-x-1 md:space-x-2 bg-black border border-primary shadow-inner shadow-primary text-white py-1 sm:py-1 md:py-2 px-3 sm:px-3 md:px-4 rounded-md hover:bg-secondary animate-glow transition-colors text-xs sm:text-xs md:text-sm">
                                    <span>Download App</span>
                                    <Download size={16} sm:size={16} md:size={20} />
                                </div>
                            </div>
                        </div>
                        {/* Dashboard Demo UI Starts Here */}
                        <div className='hidden md:grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-4 sm:mt-4 md:mt-6'>
                            {/* Wallet Balance */}
                            <div className='bg-[#F5F5F5] p-3 sm:p-3 md:p-4 rounded-xl shadow'>
                                <h4 className='text-gray-700 text-xs sm:text-xs md:text-sm'>Wallet Balance</h4>
                                <p className='text-lg sm:text-lg md:text-2xl font-semibold text-black mt-1 sm:mt-1 md:mt-2'>₦12,500.00</p>
                            </div>
                            {/* Recent Orders */}
                            <div className='bg-[#F5F5F5] p-3 sm:p-3 md:p-4 rounded-xl shadow'>
                                <h4 className='text-gray-700 text-xs sm:text-xs md:text-sm'>Recent Orders</h4>
                                <ul className='text-xs sm:text-xs md:text-sm mt-1 sm:mt-1 md:mt-2 text-gray-800 space-y-1'>
                                    <li>• Nike Sneakers - ₦19,000</li>
                                    <li>• AirPods - ₦15,500</li>
                                </ul>
                            </div>
                            {/* Activity Stats */}
                            <div className='bg-[#F5F5F5] p-3 sm:p-3 md:p-4 rounded-xl shadow'>
                                <h4 className='text-gray-700 text-xs sm:text-xs md:text-sm'>This Week</h4>
                                <div className='flex justify-between items-center mt-1 sm:mt-1 md:mt-2'>
                                    <div>
                                        <p className='text-xs sm:text-xs md:text-sm text-gray-600'>Transactions</p>
                                        <p className='font-semibold text-sm sm:text-sm md:text-base'>34</p>
                                    </div>
                                    <div>
                                        <p className='text-xs sm:text-xs md:text-sm text-gray-600'>Spending</p>
                                        <p className='font-semibold text-sm sm:text-sm md:text-base'>₦92,000</p>
                                    </div>
                                </div>
                            </div>
                            {/* Notifications */}
                            <div className='bg-[#F5F5F5] p-3 sm:p-3 md:p-4 rounded-xl shadow'>
                                <h4 className='text-gray-700 text-xs sm:text-xs md:text-sm'>Notifications</h4>
                                <ul className='text-xs sm:text-xs md:text-sm mt-1 sm:mt-1 md:mt-2 text-gray-800 space-y-1'>
                                    <li>• Your order has been shipped</li>
                                    <li>• Wallet funded: ₦10,000</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                    <aside className='w-full md:block hidden sm:w-full md:w-1/5'>
                        <div className='bg-black h-fit rounded-2xl p-3'>
                            <div className='text-center'>
                                <h3 className='text-white text-lg sm:text-lg md:text-2xl font-medium max-w-10 text-center'>New Century <span className='text-primary font-dancing'>Cleat</span></h3>
                                <img src="images/hustleimg14.webp" alt="" className='w-full h-auto rounded-md' />
                            </div>
                            <div className='space-y-2 text-white mt-3 flex flex-col items-center'>
                                <p className='text-lg sm:text-lg md:text-2xl'>$1,099.00</p>
                                <p className='text-[10px] sm:text-[10px] md:text-xs text-gray-300'>$1,400.00 - 20% off</p>
                                <div className="w-full text-center bg-primary shadow-primary text-white py-1 px-4 sm:px-4 md:px-6 rounded-md hover:bg-secondary transition-colors text-xs sm:text-xs md:text-base">
                                    <span>Buy Now</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
        <div className='md:hidden overflow-x-hidden mt-12 '>
            <img src="images/dashboardimg.png" alt="" />
        </div>
        <div className='flex flex-col items-center justify-center mt-10 md:mt-20 max-w-md mx-auto '>
            <h2 className='text-primary text-lg'>Explore Countless Benefits</h2>
            <h1 className='font-semibold text-center text-white text-4xl mt-6'>Launch a Custom <span className='font-dancing block'>Storefront</span> </h1>
            <div className="flex items-center justify-center w-fit space-x-2 bg-primary mt-6 text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors">
                <span className='text-md'>Start Selling Product - <span className='font-dancing'>No Commissions</span> </span>
                <ArrowRight size={20} />
            </div>
            <div>
                <img src="images/hustleimg15.webp" alt="" className='-mb-10' />
            </div>

        </div>

    </section>
  )
}

export default Expand