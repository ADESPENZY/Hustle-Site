import { ArrowRight, BadgeAlert, BatteryFull, Bell, ChartNoAxesColumnIncreasing, CircleDollarSign, IdCard, ScanQrCode, Target, WifiIcon } from 'lucide-react'
import React from 'react'
import CardSection from '../CardSection'

const Enterpreneur = () => {
  return (
    <div className='max-w-7xl mx-auto pt-16 '>
      <div className='max-w-5xl mx-auto grid grid-cols-3 gap-8 '>
        <div className='h-3 bg-primary rounded-full animate-glow'></div>
        <div className='h-3 bg-primary rounded-full animate-glow'></div>
        <div className='h-3 bg-primary rounded-full animate-glow'></div>
      </div>
      <div className='flex flex-row items-end justify-between mt-16 text-white relative'>
        <div className='w-[65%] space-y-10'>
          <div className='max-w-lg text-white space-y-5'>
            <h1 className='text-4xl md:text-5xl font-semibold'>The future of African entrepreneurship starts with you.</h1>  
            <p className='text-sm text-gray-400'>Download Hustle and take charge of your hustle journey—securely, globally, and unapologetically.</p>  
            <div className='flex items-center space-x-5'>
              <div className=" bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors">
                <span>DownLoad On Appstore</span>
              </div>
              <div className=" bg-white text-black py-2 px-4 rounded-md transition-colors">
                <span className='font-semibold'>DownLoad On Playstore</span>
              </div>
            </div>            
          </div>
          <div className='flex items-start -space-x-5 relative'>
            <div className='bg-white rounded-2xl w-72 '>
              <div className='flex justify-between items-center m-5 text-black mb-4'>
                <span className='text-xs '>11:36</span>
                <div className='space-x-3 flex '>
                    <ChartNoAxesColumnIncreasing size={16}  />
                    <WifiIcon size={16}  />
                    <BatteryFull size={16} />
                </div>
              </div>
              <div className='p-5 text-black space-y-5 bg-[#F9F9F9]'>
                <div className='flex items-center justify-between'>
                  <img src="images/hustleimg15.png" alt="" className='rounded-full h-10 w-10' /> 
                  <div className='space-x-3 flex items-center' >
                    <Bell size={20}/>
                    <ScanQrCode size={20}/>
                  </div>                
                </div>
                <div className='flex space-x-6 items-center text-xs'>
                  <h3>Banking</h3>
                  <h3>Crypto</h3>
                  <div className='p-2 bg-white rounded-xl'>
                    <h3>Card</h3>
                  </div>
                </div>
                <div className='bg-black p-3 rounded-xl space-y-5'>
                  <div className='bg-[#181D26] p-1 flex items-center space-x-3 w-fit rounded-lg'>
                    <IdCard className='text-gray-400' />
                    <p className="bg-gradient-to-r from-[#FF78C1] to-[#FCDB2D] bg-clip-text text-transparent">
                      Virtual Card creation
                    </p>
                  </div>
                  <div className='space-y-1'>
                    <h3 className='text-2xl font-semibold text-white'>Choose Card Type</h3>
                    <p className='text-sm text-gray-400'>Please Make A selection below</p>
                  </div>
                </div>
                <div className='bg-black rounded-full py-2 px-5 flex justify-between items-center'>
                  <div className='bg-white p-1 flex items-center space-x-3 rounded-full'>
                    <CircleDollarSign />
                    <p className='text-sm'>Dollar Card</p>
                  </div>
                  <h3 className='text-white font-semibold text-sm'>N Naira Card</h3>
                </div>
                <div className='space-y-2'>
                  <p className='text-xs text-gray-400'>Choose Your Card Brand</p>
                  <div className='bg-white p-2 rounded-md flex justify-between items-center '>
                    <div className=' flex items-center space-x-3 '>
                      <CircleDollarSign />
                      <p className='text-sm'>Dollar Card</p>
                    </div>
                    <div className='bg-gray-200 p-1 px-4 flex items-center space-x-3 rounded-full'>
                      <img src="images/mastercard.jpg" alt="" className='h-5 w-5' />
                      <h2 className='text-xs'>Master Card</h2>
                    </div>
                  </div>
                  <p className='text-xs text-gray-400'>Card can be used online globally</p>
                </div>
              </div>
              
            </div>  
            <div className='bg-white rounded-2xl w-72'>
              <div className='flex justify-between items-center m-5 text-black mb-4'>
                <span className='text-xs '>11:36</span>
                <div className='space-x-3 flex '>
                    <ChartNoAxesColumnIncreasing size={16}  />
                    <WifiIcon size={16}  />
                    <BatteryFull size={16} />
                </div>
              </div>
              <div className='p-5 text-black space-y-5 bg-[#F9F9F9]'>
                <div className='flex items-center justify-between'>
                  <img src="images/hustleimg15.png" alt="" className='rounded-full h-10 w-10' /> 
                  <div className='space-x-3 flex items-center' >
                    <Bell size={20}/>
                    <ScanQrCode size={20}/>
                  </div>                
                </div>
                <div className='flex space-x-6 items-center text-xs'>
                  <h3>Banking</h3>
                  <h3>Crypto</h3>
                  <div className='p-2 bg-white rounded-xl'>
                    <h3>Card</h3>
                  </div>
                </div>
                <div className='bg-black p-3 rounded-xl space-y-5'>
                  <div className='bg-[#181D26] p-1 flex items-center space-x-3 w-fit rounded-lg'>
                    <IdCard className='text-gray-400' />
                    <p className="bg-gradient-to-r from-[#FF78C1] to-[#FCDB2D] bg-clip-text text-transparent">
                      Virtual Card creation
                    </p>
                  </div>
                  <div className='space-y-1'>
                    <h3 className='text-2xl font-semibold text-white'>Choose Card Type</h3>
                    <p className='text-sm text-gray-400'>Please Make A selection below</p>
                  </div>
                </div>
                <div className='bg-black rounded-full py-2 px-5 flex justify-between items-center'>
                  <div className='bg-white p-1 flex items-center space-x-3 rounded-full'>
                    <CircleDollarSign />
                    <p className='text-xs'>Dollar Card</p>
                  </div>
                  <h3 className='text-white font-semibold text-xs'>N Naira Card</h3>
                </div>
                <div className='space-y-2'>
                  <p className='text-xs text-gray-400'>Choose Your Card Brand</p>
                  <div className='bg-white p-2 rounded-md flex justify-between items-center '>
                    <div className=' flex items-center space-x-3 '>
                      <CircleDollarSign />
                      <p className='text-sm'>Dollar Card</p>
                    </div>
                    <div className='bg-gray-200 p-1 px-4 flex items-center space-x-3 rounded-full'>
                      <img src="images/mastercard.jpg" alt="" className='h-5 w-5' />
                      <h2 className='text-xs'>Master Card</h2>
                    </div>
                  </div>
                  <p className='text-xs text-gray-400'>Card can be used online globally</p>
                </div>
                {/* <div className='space-y-2'>
                  <p className='text-xs'>Issuing Fee</p>
                  <div className='flex space-x-3 items-center bg-[#EAEEFF] p-3 rounded-xl'>
                    <BadgeAlert />
                    <div className='space-y-3'>
                      <p className='text-xs text-gray-600'>New USD card require a minimum balance of 3,225 naira in your account</p>
                      <p className='text-xs text-gray-600'>1 USD = 1075 naira</p>
                    </div>
                  </div>
                  <div className='flex justify-between items-center bg-[#fcfcfc] p-3 rounded-xl'>
                    <Target size={16} />
                    <div className='space-y-1'>
                      <p className='text-xs text-gray-600'>Charge Fee</p>
                      <p className='text-md'>$2</p>
                    </div>
                    <img src="images/Mastercard2.png" alt="" className='h-10 w-16' />
                  </div>
                </div> */}
              </div>
            </div>   
            <div className='bg-white rounded-2xl w-72 h-[] relative'>
              
              {/* Top Bar */}
              <div className='flex justify-between items-center m-5 text-black mb-4'>
                <span className='text-xs'>11:36</span>
                <div className='space-x-3 flex'>
                  <ChartNoAxesColumnIncreasing size={16} />
                  <WifiIcon size={16} />
                  <BatteryFull size={16} />
                </div>
              </div>

              {/* Content Section */}
              <div className='p-5 text-black space-y-5 bg-[#F9F9F9]'>
                <div className='flex items-center justify-between'>
                  <img src="images/hustleimg15.png" alt="" className='rounded-full h-10 w-10' />
                  <div className='space-x-3 flex items-center'>
                    <Bell size={20} />
                    <ScanQrCode size={20} />
                  </div>
                </div>

                {/* Tab Selector */}
                <div className='flex space-x-6 items-center text-xs'>
                  <h3>Banking</h3>
                  <h3>Crypto</h3>
                  <div className='p-2 bg-white rounded-xl'>
                    <h3>Card</h3>
                  </div>
                </div>

                {/* Card Options */}
                <div className='bg-black rounded-full py-2 px-2 flex space-x-1 items-center'>
                  <div className='bg-white flex items-center space-x-1 rounded-full px-2 py-1'>
                    <CircleDollarSign />
                    <p className='text-xs'>Dollar Card</p>
                  </div>
                  <div className='text-white flex items-center space-x-1 rounded-full px-2 py-1'>
                    <CircleDollarSign />
                    <p className='text-xs'>Naira Card</p>
                  </div>
                  <div className='text-white flex items-center space-x-1 rounded-full px-2 py-1'>
                    <CircleDollarSign />
                    <p className='text-xs'>Gift Card</p>
                  </div>
                </div>

                {/* Verve Virtual Card */}
                <div className="w-full h-[180px] rounded-2xl bg-[#2B937B] text-white p-4 shadow-md relative overflow-hidden font-mono">
                  {/* Verve Logo (text or image) */}
                  <div className="absolute top-4 right-4 text-sm font-bold tracking-wide">
                    Verve
                  </div>

                  {/* Chip */}
                  <div className="w-10 h-7 bg-yellow-400 rounded-sm mb-5"></div>

                  {/* Card Number */}
                  <div className="text-lg tracking-widest mb-4">
                    5375  XXXX  XXXX  2456
                  </div>

                  {/* Card Holder & Expiry */}
                  <div className="flex justify-between text-xs">
                    <div>
                      <p className="opacity-70">Card Holder</p>
                      <p className="font-semibold">John Doe</p>
                    </div>
                    <div>
                      <p className="opacity-70">Valid Thru</p>
                      <p className="font-semibold">12/28</p>
                    </div>
                  </div>

                  {/* Subtle Circle Background */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                </div>
                <div className='space-y-1 '>
                  <p className='text-xs'>Issuing Fee</p>
                  <div className='bg-gray-200 p-1 px-4 flex items-center space-x-3 rounded-full'>
                      <img src="images/mastercard.jpg" alt="" className='h-5 w-5' />
                      <h2 className='text-xs'>Master Card</h2>
                    </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
        <div class="absolute bg-[#14182E] w-[570px] h-[607px] top-0 left-[860px] rounded-[32px] inner-shadow flex items-center justify-center" >
          <div className="h-[303px] w-1/2 bg-primary boxing-shadow relative mx-auto">
            {/* Top Center Glow */}
            <div className="bg-[#14182E] absolute left-1/2 top-0 -translate-x-1/2 w-36 h-14 animate-blackGlow shadow-primary shadow-inner z-10"></div>

            {/* Middle Center Glow */}
            <div className="bg-[#14182E] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-14 animate-blackGlow shadow-primary shadow-inner z-10"></div>

            {/* Bottom Center Glow */}
            <div className="bg-[#14182E] absolute left-1/2 bottom-0 -translate-x-1/2 w-36 h-14 animate-blackGlow shadow-primary shadow-inner z-10"></div>

            {/* Transparent Overlay in the middle-ish area */}
            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-10/12 shadow-inner shadow-primary bg-[#14182E]/60 z-20 rounded-xl ">
                <div className='flex item-center justify-center mt-5 relative'>
                  <div className='w-20 h-1 bg-gray-200 rounded-full'></div>
                   <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white font-bold text-sm z-30">
                      ×
                    </button>
                </div>
                <div className='m-5 space-y-2'>
                  <h2 className='text-sm font-semibold '>Wallets</h2>
                  <p className='text-gray-400 text-xs'>Select an option</p>
                  <div className='p-2 space-y-1'>
                    <div className='bg-[#1A1E3B80] border border-primary rounded-full flex items-center justify-center space-x-3'>
                      <img src="images/nigeriaflag.jpg" alt="" className='w-5 h-5 rounded-full' />
                      <div className='space-y-1'>
                        <p className=''>₦323,014.30</p>
                        <p className='text-xs text-gray-400'>Nigerian Naira</p>
                      </div>
                    </div>
                    <div className='bg-[#1A1E3B80] border border-primary rounded-full flex items-center justify-center space-x-3'>
                      <img src="images/nigeriaflag.jpg" alt="" className='w-5 h-5 rounded-full' />
                      <div className='space-y-1'>
                        <p className=''>₦323,014.30</p>
                        <p className='text-xs text-gray-400'>Nigerian Naira</p>
                      </div>
                    </div>
                    <div className='bg-[#1A1E3B80] border border-primary rounded-full flex items-center justify-center space-x-3'>
                      <img src="images/unitedState.webp" alt="" className='w-5 h-5 rounded-full' />
                      <div className='space-y-1'>
                        <p className=''>$10,291.70</p>
                        <p className='text-xs text-gray-400'>United States Dollars</p>
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

export default Enterpreneur