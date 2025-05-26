import { Activity, AlignHorizontalJustifyStart, BadgeAlert, BatteryFull, Bell, ChartNoAxesColumnIncreasing, CircleDollarSign, EarthLock, IdCard, ScanQrCode, Target, WifiIcon } from 'lucide-react'
import React from 'react'
import CardSection from '../CardSection'

const Fueling = () => {
  return (
    <section id='solutions' className='max-w-7xl mx-auto pt-16 '>
        <div className='flex flex-col items-center justify-center max-w-md mx-auto '>
            <h2 className='text-primary text-lg'>Fueling the Hustle Spirit Across Africa</h2>
            <h1 className='font-semibold text-center text-4xl mt-3'>Comprehensive. Secure. <span className='font-dancing'>Community</span>-Centric.</h1>
            <p className='text-gray-600 text-xs text-center mt-4 pb-3 border-b border-gray-400'>We’re not just another fintech app—we’re your all-in-one hustle partner.</p>
            <div className='flex items-center justify-center space-x-3 mt-3 '>
                <div className='flex items-center space-x-1'>
                    <Activity size={12} />
                    <p className='text-xs'>Swift</p>
                </div>
                <div className='flex items-center space-x-1'>
                    <AlignHorizontalJustifyStart size={12} />
                    <p className='text-xs'>Services</p>
                </div>
                <div className='flex items-center space-x-1'>
                    <EarthLock size={12} />
                    <p className='text-xs'>Secure</p>
                </div>
            </div>
        </div>
        <section className="pt-8">
          <div className="relative overflow-x-hidden py-4">
            <div
              className="flex items-center gap-6 md:w-[200%] px-4 animate-scroll"
              style={{
                animation: 'scroll 30s linear infinite', // Auto-scroll animation
              }}
            >
              {/* Card 1 - Dashboard Overview */}
              <div
                className="h-fit bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg py-2 px-6 flex flex-col transform transition-all duration-300 hover:scale-105"
                style={{
                  backgroundImage: "url('https://www.transparenttextures.com/patterns/leather.png')",
                  backgroundSize: 'cover',
                  border: '2px solid #4B3F2A',
                  boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className='flex justify-between items-center text-black mb-4'>
                  <span className='text-xs '>11:36</span>
                  <div className='space-x-3 flex '>
                      <ChartNoAxesColumnIncreasing size={16}  />
                      <WifiIcon size={16}  />
                      <BatteryFull size={16} />
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <img src="images/hustleimg15.png" alt="" className='rounded-full h-10 w-10' /> 
                  <div className='space-x-3 flex items-center' >
                    <Bell size={20}/>
                    <ScanQrCode size={20}/>
                  </div>                
                </div>
                <div className='p-5 text-black space-y-5'>
                
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
                  <div className='hidden md:block space-y-2'>
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

              {/* Card 2 - Dashboard Overview */}
              <div
                className=" h-fit bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg py-2 px-6 flex flex-col transform transition-all duration-300 hover:scale-105"
                style={{
                  backgroundImage: "url('https://www.transparenttextures.com/patterns/leather.png')",
                  backgroundSize: 'cover',
                  border: '2px solid #4B3F2A',
                  boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className='flex justify-between items-center text-black mb-4'>
                  <span className='text-xs '>11:36</span>
                  <div className='space-x-3 flex '>
                      <ChartNoAxesColumnIncreasing size={16}  />
                      <WifiIcon size={16}  />
                      <BatteryFull size={16} />
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <img src="images/hustleimg15.png" alt="" className='rounded-full h-10 w-10' /> 
                  <div className='space-x-3 flex items-center' >
                    <Bell size={20}/>
                    <ScanQrCode size={20}/>
                  </div>                
                </div>
                <div className='p-5 text-black space-y-5'>
                
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
                  <div className='hidden md:block space-y-2'>
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
              
              {/* Card 3 - Dashboard Overview */}
              <div
                className=" h-fit bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg py-2 px-6 flex flex-col transform transition-all duration-300 hover:scale-105"
                style={{
                  backgroundImage: "url('https://www.transparenttextures.com/patterns/leather.png')",
                  backgroundSize: 'cover',
                  border: '2px solid #4B3F2A',
                  boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className='flex justify-between items-center text-black mb-4'>
                  <span className='text-xs '>11:36</span>
                  <div className='space-x-3 flex '>
                      <ChartNoAxesColumnIncreasing size={16}  />
                      <WifiIcon size={16}  />
                      <BatteryFull size={16} />
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <img src="images/hustleimg15.png" alt="" className='rounded-full h-10 w-10' /> 
                  <div className='space-x-3 flex items-center' >
                    <Bell size={20}/>
                    <ScanQrCode size={20}/>
                  </div>                
                </div>
                <div className='p-5 text-black space-y-5'>
                
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
                  <div className='hidden md:block space-y-2'>
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

              {/* Card 4 - Dashboard Overview */}
              <div
                className=" h-fit bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg py-2 px-6 flex flex-col transform transition-all duration-300 hover:scale-105"
                style={{
                  backgroundImage: "url('https://www.transparenttextures.com/patterns/leather.png')",
                  backgroundSize: 'cover',
                  border: '2px solid #4B3F2A',
                  boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className='flex justify-between items-center text-black mb-4'>
                  <span className='text-xs '>11:36</span>
                  <div className='space-x-3 flex '>
                      <ChartNoAxesColumnIncreasing size={16}  />
                      <WifiIcon size={16}  />
                      <BatteryFull size={16} />
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <img src="images/hustleimg15.png" alt="" className='rounded-full h-10 w-10' /> 
                  <div className='space-x-3 flex items-center' >
                    <Bell size={20}/>
                    <ScanQrCode size={20}/>
                  </div>                
                </div>
                <div className='p-5 text-black space-y-5'>
                
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
                  <div className='hidden md:block space-y-2'>
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

              {/* Card 5 - Dashboard Overview */}
              <div
                className=" h-fit bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg py-2 px-6 flex flex-col transform transition-all duration-300 hover:scale-105"
                style={{
                  backgroundImage: "url('https://www.transparenttextures.com/patterns/leather.png')",
                  backgroundSize: 'cover',
                  border: '2px solid #4B3F2A',
                  boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className='flex justify-between items-center text-black mb-4'>
                  <span className='text-xs '>11:36</span>
                  <div className='space-x-3 flex '>
                      <ChartNoAxesColumnIncreasing size={16}  />
                      <WifiIcon size={16}  />
                      <BatteryFull size={16} />
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <img src="images/hustleimg15.png" alt="" className='rounded-full h-10 w-10' /> 
                  <div className='space-x-3 flex items-center' >
                    <Bell size={20}/>
                    <ScanQrCode size={20}/>
                  </div>                
                </div>
                <div className='p-5 text-black space-y-5'>
                
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
                  <div className='hidden md:block space-y-2'>
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

              {/* Card 6 - Dashboard Overview */}
              <div
                className=" h-fit bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg py-2 px-6 flex flex-col transform transition-all duration-300 hover:scale-105"
                style={{
                  backgroundImage: "url('https://www.transparenttextures.com/patterns/leather.png')",
                  backgroundSize: 'cover',
                  border: '2px solid #4B3F2A',
                  boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className='flex justify-between items-center text-black mb-4'>
                  <span className='text-xs '>11:36</span>
                  <div className='space-x-3 flex '>
                      <ChartNoAxesColumnIncreasing size={16}  />
                      <WifiIcon size={16}  />
                      <BatteryFull size={16} />
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <img src="images/hustleimg15.png" alt="" className='rounded-full h-10 w-10' /> 
                  <div className='space-x-3 flex items-center' >
                    <Bell size={20}/>
                    <ScanQrCode size={20}/>
                  </div>                
                </div>
                <div className='p-5 text-black space-y-5'>
                
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
                  <div className='hidden md:block space-y-2'>
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

              {/* Card 7 - Dashboard Overview */}
              <div
                className=" h-fit bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg py-2 px-6 flex flex-col transform transition-all duration-300 hover:scale-105"
                style={{
                  backgroundImage: "url('https://www.transparenttextures.com/patterns/leather.png')",
                  backgroundSize: 'cover',
                  border: '2px solid #4B3F2A',
                  boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)',
                }}
              >
                <div className='flex justify-between items-center text-black mb-4'>
                  <span className='text-xs '>11:36</span>
                  <div className='space-x-3 flex '>
                      <ChartNoAxesColumnIncreasing size={16}  />
                      <WifiIcon size={16}  />
                      <BatteryFull size={16} />
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <img src="images/hustleimg15.png" alt="" className='rounded-full h-10 w-10' /> 
                  <div className='space-x-3 flex items-center' >
                    <Bell size={20}/>
                    <ScanQrCode size={20}/>
                  </div>                
                </div>
                <div className='p-5 text-black space-y-5'>
                
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
                  <div className='hidden md:block space-y-2'>
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

            </div>
            <div className="absolute lg:block inset-y-0 left-0 w-[30%] bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute lg:block inset-y-0 right-0 w-[30%] bg-gradient-to-r from-transparent to-white"></div>

        </div>
          
          

        </section>


    </section>
  )
}

export default Fueling