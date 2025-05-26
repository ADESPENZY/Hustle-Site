import { ArrowRight, BadgeAlert, BatteryFull, Bell, ChartNoAxesColumnIncreasing, CircleDollarSign, IdCard, ScanQrCode, Target, WifiIcon } from 'lucide-react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Entrepreneur = () => {
  const cards = [
    {
      id: 1,
      content: (
        <>
          <div className='flex justify-between items-center m-3 sm:m-3 md:m-5 text-black mb-3 sm:mb-3 md:mb-4'>
            <span className='text-xs'>11:36</span>
            <div className='space-x-2 sm:space-x-2 md:space-x-3 flex'>
              <ChartNoAxesColumnIncreasing size={12} sm:size={12} md:size={16} />
              <WifiIcon size={12} sm:size={12} md:size={16} />
              <BatteryFull size={12} sm:size={12} md:size={16} />
            </div>
          </div>
          <div className='p-3 sm:p-4 md:p-5 text-black space-y-3 sm:space-y-3 md:space-y-4 bg-[#F9F9F9]'>
            <div className='flex items-center justify-between'>
              <img src="images/hustleimg15.png" alt="" className='rounded-full h-8 w-8 sm:h-8 sm:w-8 md:h-10 md:w-10' loading="lazy" /> 
              <div className='space-x-2 sm:space-x-2 md:space-x-3 flex items-center'>
                <Bell size={16} sm:size={16} md:size={20} />
                <ScanQrCode size={16} sm:size={16} md:size={20} />
              </div>                
            </div>
            <div className='flex space-x-4 sm:space-x-3 md:space-x-6 items-center text-xs'>
              <h3>Banking</h3>
              <h3>Crypto</h3>
              <div className='p-1 sm:p-1 md:p-2 bg-white rounded-lg'>
                <h3>Card</h3>
              </div>
            </div>
            <div className='bg-black p-2 sm:p-2 md:p-3 rounded-lg space-y-3 sm:space-y-3 md:space-y-4'>
              <div className='bg-[#181D26] p-1 flex items-center space-x-2 sm:space-x-2 md:space-x-3 w-fit rounded-lg'>
                <IdCard className='text-gray-400 w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5' />
                <p className="bg-gradient-to-r sm:from- md:from-[#FF78C1] to-[#FCDB2D] bg-clip-text text-transparent text-xs sm:text-xs md:text-sm">
                  Virtual Card creation
                </p>
              </div>
              <div className='space-y-1'>
                <h3 className='text-lg sm:text-lg md:text-2xl font-semibold text-white'>Choose Card Type</h3>
                <p className='text-xs sm:text-xs md:text-sm text-gray-400'>Please Make A selection below</p>
              </div>
            </div>
            <div className='bg-black rounded-full py-1 sm:py-1 md:py-2 px-3 sm:px-3 md:px-5 flex justify-between items-center'>
              <div className='bg-white p-1 flex items-center space-x-2 sm:space-x-2 md:space-x-3 rounded-full'>
                <CircleDollarSign size={12} sm:size={12} md:size={16} />
                <p className='text-xs sm:text-xs md:text-sm'>Dollar Card</p>
              </div>
              <h3 className='text-white font-semibold text-xs sm:text-xs md:text-xs'>N Naira Card</h3>
            </div>
            <div className='space-y-2'>
              <p className='text-xs sm:text-xs md:text-xs text-gray-400'>Choose Your Card Brand</p>
              <div className='bg-white p-1 sm:p-1 md:p-2 rounded-md flex justify-between items-center'>
                <div className='flex items-center space-x-2 sm:space-x-2 md:space-x-3'>
                  <CircleDollarSign size={12} sm:size={12} md:size={16} />
                  <p className='text-xs sm:text-xs md:text-sm'>Dollar Card</p>
                </div>
                <div className='bg-gray-200 p-1 px-3 sm:px-3 md:px-4 flex items-center space-x-2 sm:space-x-2 md:space-x-3 rounded-full'>
                  <img src="images/mastercard.jpg" alt="" className='h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5' loading="lazy" />
                  <h2 className='text-xs sm:text-xs md:text-xs'>Master Card</h2>
                </div>
              </div>
              <p className='text-xs sm:text-xs md:text-xs text-gray-400'>Card can be used online globally</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <div className='flex justify-between items-center m-3 sm:m-3 md:m-5 text-black mb-3 sm:mb-3 md:mb-4'>
            <span className='text-xs'>11:36</span>
            <div className='space-x-2 sm:space-x-2 md:space-x-3 flex'>
              <ChartNoAxesColumnIncreasing size={12} sm:size={12} md:size={16} />
              <WifiIcon size={12} sm:size={12} md:size={16} />
              <BatteryFull size={12} sm:size={12} md:size={16} />
            </div>
          </div>
          <div className='p-3 sm:p-4 md:p-5 text-black space-y-3 sm:space-y-3 md:space-y-4 bg-[#F9F9F9]'>
            <div className='flex items-center justify-between'>
              <img src="images/hustleimg15.png" alt="" className='rounded-full h-8 w-8 sm:h-8 sm:w-8 md:h-10 md:w-10' loading="lazy" /> 
              <div className='space-x-2 sm:space-x-2 md:space-x-3 flex items-center'>
                <Bell size={16} sm:size={16} md:size={20} />
                <ScanQrCode size={16} sm:size={16} md:size={20} />
              </div>                
            </div>
            <div className='flex space-x-4 sm:space-x-3 md:space-x-6 items-center text-xs'>
              <h3>Banking</h3>
              <h3>Crypto</h3>
              <div className='p-1 sm:p-1 md:p-2 bg-white rounded-lg'>
                <h3>Card</h3>
              </div>
            </div>
            <div className='bg-black p-2 sm:p-2 md:p-3 rounded-lg space-y-3 sm:space-y-3 md:space-y-4'>
              <div className='bg-[#181D26] p-1 flex items-center space-x-2 sm:space-x-2 md:space-x-3 w-fit rounded-lg'>
                <IdCard className='text-gray-400 w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5' />
                <p className="bg-gradient-to-r from-[#FF78C1] to-[#FCDB2D] bg-clip-text text-transparent text-xs sm:text-xs md:text-sm">
                  Virtual Card creation
                </p>
              </div>
              <div className='space-y-1'>
                <h3 className='text-lg sm:text-lg md:text-2xl font-semibold text-white'>Choose Card Type</h3>
                <p className='text-xs sm:text-xs md:text-sm text-gray-400'>Please Make A selection below</p>
              </div>
            </div>
            <div className='bg-black rounded-full py-1 sm:py-1 md:py-2 px-3 sm:px-3 md:px-5 flex justify-between items-center'>
              <div className='bg-white p-1 flex items-center space-x-2 sm:space-x-2 md:space-x-3 rounded-full'>
                <CircleDollarSign size={12} sm:size={12} md:size={16} />
                <p className='text-xs sm:text-xs md:text-sm'>Dollar Card</p>
              </div>
              <h3 className='text-white font-semibold text-xs sm:text-xs md:text-xs'>N Naira Card</h3>
            </div>
            <div className='space-y-2'>
              <p className='text-xs sm:text-xs md:text-xs text-gray-400'>Choose Your Card Brand</p>
              <div className='bg-white p-1 sm:p-1 md:p-2 rounded-md flex justify-between items-center'>
                <div className='flex items-center space-x-2 sm:space-x-2 md:space-x-3'>
                  <CircleDollarSign size={12} sm:size={12} md:size={16} />
                  <p className='text-xs sm:text-xs md:text-sm'>Dollar Card</p>
                </div>
                <div className='bg-gray-200 p-1 px-3 sm:px-3 md:px-4 flex items-center space-x-2 sm:space-x-2 md:space-x-3 rounded-full'>
                  <img src="images/mastercard.jpg" alt="" className='h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5' loading="lazy" />
                  <h2 className='text-xs sm:text-xs md:text-xs'>Master Card</h2>
                </div>
              </div>
              <p className='text-xs sm:text-xs md:text-xs text-gray-400'>Card can be used online globally</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <div className='flex justify-between items-center m-3 sm:m-3 md:m-5 text-black mb-3 sm:mb-3 md:mb-4'>
            <span className='text-xs'>11:36</span>
            <div className='space-x-2 sm:space-x-2 md:space-x-3 flex'>
              <ChartNoAxesColumnIncreasing size={12} sm:size={12} md:size={16} />
              <WifiIcon size={12} sm:size={12} md:size={16} />
              <BatteryFull size={12} sm:size={12} md:size={16} />
            </div>
          </div>
          <div className='p-3 sm:p-4 md:p-5 text-black space-y-3 sm:space-y-3 md:space-y-4 bg-[#F9F9F9]'>
            <div className='flex items-center justify-between'>
              <img src="images/hustleimg15.png" alt="" className='rounded-full h-8 w-8 sm:h-8 sm:w-8 md:h-10 md:w-10' loading="lazy" />
              <div className='space-x-2 sm:space-x-2 md:space-x-3 flex items-center'>
                <Bell size={16} sm:size={16} md:size={20} />
                <ScanQrCode size={16} sm:size={16} md:size={20} />
              </div>
            </div>
            <div className='flex space-x-4 sm:space-x-3 md:space-x-6 items-center text-xs'>
              <h3>Banking</h3>
              <h3>Crypto</h3>
              <div className='p-1 sm:p-1 md:p-2 bg-white rounded-lg'>
                <h3>Card</h3>
              </div>
            </div>
            <div className='bg-black rounded-full py-1 sm:py-1 md:py-2 px-2 sm:px-2 md:px-2 flex space-x-1 items-center'>
              <div className='bg-white flex items-center space-x-1 rounded-full px-2 py-1'>
                <CircleDollarSign size={12} sm:size={12} md:size={16} />
                <p className='text-xs sm:text-xs md:text-xs'>Dollar Card</p>
              </div>
              <div className='text-white flex items-center space-x-1 rounded-full px-2 py-1'>
                <CircleDollarSign size={12} sm:size={12} md:size={16} />
                <p className='text-xs sm:text-xs md:text-xs'>Naira Card</p>
              </div>
              <div className='text-white flex items-center space-x-1 rounded-full px-2 py-1'>
                <CircleDollarSign size={12} sm:size={12} md:size={16} />
                <p className='text-xs sm:text-xs md:text-xs'>Gift Card</p>
              </div>
            </div>
            <div className="w-full h-[140px] sm:h-[160px] md:h-[180px] rounded-2xl bg-[#2B937B] text-white p-3 sm:p-3 md:p-4 shadow-md relative overflow-hidden font-mono">
              <div className="absolute top-3 sm:top-3 md:top-4 right-3 sm:right-3 md:right-4 text-xs sm:text-xs md:text-sm font-bold tracking-wide">
                Verve
              </div>
              <div className="w-8 sm:w-8 md:w-10 h-6 sm:h-6 md:h-7 bg-yellow-400 rounded-sm mb-3 sm:mb-3 md:mb-4"></div>
              <div className="text-base sm:text-base md:text-lg tracking-widest mb-2 sm:mb-2 md:mb-3">
                5375  XXXX  XXXX  2456
              </div>
              <div className="flex justify-between text-xs sm:text-xs md:text-xs">
                <div>
                  <p className="opacity-70">Card Holder</p>
                  <p className="font-semibold">John Doe</p>
                </div>
                <div>
                  <p className="opacity-70">Valid Thru</p>
                  <p className="font-semibold">12/28</p>
                </div>
              </div>
              <div className="absolute -bottom-8 sm:-bottom-8 md:-bottom-10 -right-8 sm:-right-8 md:-right-10 w-24 sm:w-24 md:w-32 h-24 sm:h-24 md:h-32 bg-white/10 rounded-full"></div>
            </div>
            <div className='space-y-1'>
              <p className='text-xs sm:text-xs md:text-xs text-gray-400'>Issuing Fee</p>
              <div className='bg-gray-200 p-1 px-3 sm:px-3 md:px-4 flex items-center space-x-2 sm:space-x-2 md:space-x-3 rounded-full'>
                <img src="images/mastercard.jpg" alt="" className='h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5' loading="lazy" />
                <h2 className='text-xs sm:text-xs md:text-xs'>Master Card</h2>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ]

  return (
    <div className='max-w-7xl mx-auto pt-6 sm:pt-6 md:pt-12 px-4 sm:px-4 md:px-10 overflow-x-hidden'>
      <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4 md:gap-8'>
        <div className='h-2 sm:h-2 md:h-3 bg-primary rounded-full animate-glow'></div>
        <div className='h-2 sm:h-2 md:h-3 bg-primary rounded-full animate-glow'></div>
        <div className='h-2 sm:h-2 md:h-3 bg-primary rounded-full animate-glow'></div>
      </div>
      <div className='flex flex-col items-center space-y-6 sm:space-y-6 md:space-y-0 md:flex-row md:items-end mt-6 sm:mt-6 md:mt-12 text-white relative'>
        <div className='w-full sm:w-full md:w-[60%] space-y-4 sm:space-y-4 md:space-y-8'>
          <div className='max-w-md sm:max-w-md md:max-w-lg text-white space-y-3 sm:space-y-3 md:space-y-4 text-center md:text-start'>
            <h1 className='text-xl sm:text-2xl md:text-4xl font-semibold'>The future of African entrepreneurship starts with you.</h1>  
            <p className='text-xs sm:text-xs md:text-sm text-gray-400'>Download Hustle and take charge of your hustle journey—securely, globally, and unapologetically.</p>  
            <div className='flex flex-col sm:flex-col md:flex-row items-center space-y-2 sm:space-y-2 md:space-y-0 md:space-x-4'>
              <div className="bg-primary text-white py-1 sm:py-1 md:py-2 px-3 sm:px-3 md:px-4 rounded-md hover:bg-secondary transition-colors text-xs sm:text-xs md:text-base">
                <span>Download on App Store</span>
              </div>
              <div className="bg-white text-black py-1 sm:py-1 md:py-2 px-3 sm:px-3 md:px-4 rounded-md transition-colors text-xs sm:text-xs md:text-base">
                <span className='font-semibold'>Download on Play Store</span>
              </div>
            </div>            
          </div>
          <div className='block md:hidden'>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={16}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="w-full"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className='bg-white rounded-2xl w-full sm:w-64 mx-auto'>
                    {card.content}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='hidden md:flex items-start -space-x-5 relative h-[500px] overflow-y-hidden'>
            {cards.map((card) => (
              <div key={card.id} className='bg-white rounded-2xl w-72'>
                {card.content}
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full sm:w-[400px] md:w-[450px] h-[400px] sm:h-[450px] md:h-[500px] bg-[#14182E] rounded-[24px] sm:rounded-[24px] md:rounded-[32px] inner-shadow flex items-center justify-center mt-4 sm:mt-4 md:mt-0 md:absolute md:top-0 md:left-[780px]">
          <div className="h-[220px] sm:h-[250px] md:h-[250px] w-3/4 bg-primary boxing-shadow relative mx-auto">
            <div className="bg-[#14182E] absolute left-1/2 top-0 -translate-x-1/2 w-24 sm:w-28 md:w-36 h-8 sm:h-10 md:h-14 animate-blackGlow shadow-primary shadow-inner z-10"></div>
            <div className="bg-[#14182E] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 sm:w-28 md:w-36 h-8 sm:h-10 md:h-14 animate-blackGlow shadow-primary shadow-inner z-10"></div>
            <div className="bg-[#14182E] absolute left-1/2 bottom-0 -translate-x-1/2 w-24 sm:w-28 md:w-36 h-8 sm:h-10 md:h-14 animate-blackGlow shadow-primary shadow-inner z-10"></div>
            <div className="absolute top-24 sm:top-28 md:top-20 left-1/2 -translate-x-1/2 w-10/12 shadow-inner shadow-primary bg-[#14182E]/60 z-20 rounded-xl">
              <div className='flex items-center justify-center mt-2 sm:mt-3 md:mt-5 relative'>
                <div className='w-14 sm:w-16 md:w-20 h-1 bg-gray-200 rounded-full'></div>
                <button className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 text-white font-bold text-xs sm:text-xs md:text-sm z-30">
                  ×
                </button>
              </div>
              <div className='m-2 sm:m-3 md:m-5 space-y-1 sm:space-y-1 md:space-y-2'>
                <h2 className='text-xs sm:text-xs md:text-sm font-semibold'>Wallets</h2>
                <p className='text-gray-400 text-[10px] sm:text-[10px] md:text-xs'>Select an option</p>
                <div className='p-1 space-y-1'>
                  <div className='bg-[#1A1E3B80] border border-primary rounded-full flex items-center justify-center space-x-2 sm:space-x-2 md:space-x-3'>
                    <img src="images/nigeriaflag.jpg" alt="" className='w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full' loading="lazy" />
                    <div className='space-y-0.5'>
                      <p className='text-xs sm:text-xs md:text-sm'>₦323,014.30</p>
                      <p className='text-[10px] sm:text-[10px] md:text-xs text-gray-400'>Nigerian Naira</p>
                    </div>
                  </div>
                  <div className='bg-[#1A1E3B80] border border-primary rounded-full flex items-center justify-center space-x-2 sm:space-x-2 md:space-x-3'>
                    <img src="images/nigeriaflag.jpg" alt="" className='w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full' loading="lazy" />
                    <div className='space-y-0.5'>
                      <p className='text-xs sm:text-xs md:text-sm'>₦323,014.30</p>
                      <p className='text-[10px] sm:text-[10px] md:text-xs text-gray-400'>Nigerian Naira</p>
                    </div>
                  </div>
                  <div className='bg-[#1A1E3B80] border border-primary rounded-full flex items-center justify-center space-x-2 sm:space-x-2 md:space-x-3'>
                    <img src="images/unitedState.webp" alt="" className='w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full' loading="lazy" />
                    <div className='space-y-0.5'>
                      <p className='text-xs sm:text-xs md:text-sm'>$10,291.70</p>
                      <p className='text-[10px] sm:text-[10px] md:text-xs text-gray-400'>United States Dollars</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Entrepreneur