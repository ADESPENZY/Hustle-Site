import { ArrowRight, Download, Battery, ArrowLeft, Wifi, ChartNoAxesColumnIncreasing, WifiIcon, BatteryFull, Pointer, RotateCw, RotateCcw} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import CardSection from '../CardSection';

const HeroSection = () => {
  const [cards, setCards] = useState([
  { color: '#FF8BC1', zIndex: 1, rotate: -6, animation: 'animate-float', message: "Let's Go!" },
  { color: '#8BE8FF', zIndex: 2, rotate: -3, animation: 'animate-float2', message: "Start Your Journey" },
  { color: '#6C1DEB', zIndex: 3, rotate: 0, animation: 'animate-float3', message: "Unleash Potential" },
  { color: '#FFE08B', zIndex: 4, rotate: 3, animation: 'animate-float4', message: "Send Money All Over Africa" },
  { color: '#C18BFF', zIndex: 5, rotate: 6, animation: 'animate-float5', message: "Seize the Day!" },
]);


  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        const firstCard = newCards.shift();
        newCards.push({
          ...firstCard,
          zIndex: Math.max(...newCards.map((c) => c.zIndex)) + 1,
          rotate: newCards[newCards.length - 1].rotate + 3,
          animation: `animate-float${(newCards.length % 5) + 1}`,
        });
        return newCards;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="pt-12 md:pt-24 md:pb-14 max-w-7xl mx-auto space-y-16">
      <div className="font-inter flex flex-col md:flex-row items-center">
        {/* Left Side: Text and Buttons */}
        <div className="w-full md:w-1/2  space-y-7 px-4 text-center md:text-start">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center">
            <div className="flex">
              <img
                src="/images/heroimg1.webp"
                alt="Hero Image 1"
                className="h-7 w-7 rotate-[-10deg] rounded-sm"
              />
              <img
                src="/images/heroimg2.webp"
                alt="Hero Image 2"
                className="h-7 w-7 rounded-sm"
              />
              <img
                src="/images/heroimg3.webp"
                alt="Hero Image 3"
                className="h-7 w-7 rotate-[10deg] -mr-2 rounded-sm"
              />
            </div>
            <h4 className="text-sm text-gray-700 ">
              The Platform for Africa's Next Generation Of Hustlers
            </h4>
          </div>
          <h1 className="text-4xl md:text-5xl max-w-lg font-semibold ">
            Your All-In-One <span className="font-dancing">Toolkit</span> For The
            Digital Hustle
          </h1>
          <h4 className="text-sm text-gray-700">
            Send money, sell online, find work, grow your brand—do it all with
            Hustle.
          </h4>
          <div className="flex md:flex-row flex-col items-center space-y-4 md:space-y-0 md:space-x-4">
            <Link
              to="/download"
              className="flex items-center w-fit space-x-2 bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors"
            >
              <span>Download Hustle</span>
              <Download size={20} />
            </Link>
            <Link
              to="/marketplace"
              className="flex items-center w-fit  bg-black py-2 px-4 rounded-md space-x-2 text-white font-medium hover:text-secondary transition-colors"
            >
              <span>Visit Marketplace</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Right Side: Cycling Colored Rectangles */}
        <div
          className=" w-full p-2 z-40 md:w-1/2 relative h-[200px] md:h-[350px] mt-8 md:mt-0 group hover:animation-pause"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`absolute w-full md:w-[700px] h-[200px] md:h-[350px] md:left-[-78px] rounded-lg shadow-lg card ${card.animation}`}
              style={{
                backgroundColor: card.color,
                zIndex: card.zIndex,
                transform: `rotate(${card.rotate}deg)`,
              }}
            >
              <div className="absolute inset-y-0 right-0 w-16 bg-white opacity-30 blur-md" />
              {/* Preaching Text inside the Card */}
              <div className="flex items-center justify-center h-full">
                <h2 className="text-white text-lg md:text-3xl font-bold text-center px-4">
                  {card.message}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex md:flex-row flex-col gap-10 p-2 '>
        <div className='md:w-[75%] bg-[#8BE8FF] flex flex-col p-5 pb-0 rounded-xl md:rounded-3xl space-y-2 relative '>
          <img src="images/herocoin.png" alt="" className='w-20 h-20'/>
          <div className="p-5 pb-0 flex flex-col md:flex-row items-center gap-8 ">
            <div className="p-3 hidden md:block w-full h-[450px] space-y-2 heroBackground bg-white rounded-t-3xl shadow-lg overflow-hidden ">
              <CardSection/>
              <div className='flex justify-between'>
                <div className='w-16 h-1 bg-gray-200 rounded-full'></div>
                <div className='w-16 h-1 bg-gray-600 rounded-full'></div>
                <div className='w-16 h-1 bg-gray-600 rounded-full'></div>
              </div>
              
              <span className='max-w-xl text-center font-bold'>
                <p>Powerful Social Engagement Platform</p>
              </span>
              
            </div>
            {/* Phone Screen 2 */}
            <div className="relative w-full hidden md:block h-[450px] bg-white p-1 pb-0 rounded-t-2xl shadow-lg overflow-hidden ">
              <div className="w-full h-full bg-gradient-to-br bg-black rounded-t-2xl p-3 text-gray-200 ">
                <CardSection/>
                <div className='flex justify-between mt-5'>
                  <div className='w-16 h-1 bg-gray-600 rounded-full'></div>
                  <div className='w-16 h-1 bg-gray-200 rounded-full'></div>
                  <div className='w-16 h-1 bg-gray-600 rounded-full'></div>
                </div>
                <div className='mt-5 space-y-3'>
                  <h2 className='text-center font-bold'>Lifestyle</h2>
                  <p className='text-xs text-center text-gray-400'>Everything you need is built into one easy to use app from banking, artificial intelligence to bills payment</p>
                </div>
                <div className='flex mt-8'>
                  <img src="images/herocoin.png" alt="" className='w-10 h-10'/>
                  <img src="images/heroimg5.webp" alt="" className='w-20 h-20'/>
                  <img src="images/heroimg6.webp" alt="" className='w-24 h-24'/>
                </div>
                <img src="images/heroimg7.webp" alt="" className='-mt-5' />
              </div>
            </div>
            {/* Phone Screen 3 */}
            <div className="relative w-full h-[350px] md:h-[450px] bg-white p-1 pb-0 rounded-t-2xl shadow-lg overflow-hidden ">
              <div className="w-full h-full bg-gradient-to-br bg-[#FF8BC1] rounded-t-2xl p-3 text-gray-200 ">
                <CardSection/>
                <div className='flex justify-between mt-5'>
                  <div className='w-16 h-1 bg-gray-600 rounded-full'></div>
                  <div className='w-16 h-1 bg-gray-600 rounded-full'></div>
                  <div className='w-16 h-1 bg-gray-200 rounded-full'></div>
                </div>
                <div className='mt-5 space-y-3'>
                  <h2 className='text-center font-bold'>Rewards</h2>
                  <p className='text-xs text-center text-gray-200'>Earn recurring rewards from performing social activities on HashIT and smile to the moon</p>
                </div>
                <div className='flex justify-between mt-8'>
                  <img src="images/heroimg8.webp" alt="" className='h-96 w-full'/>
                </div>
              </div>
            </div>
            <div className="hidden md:block absolute bottom-0 left-0 w-full h-[25%] bg-gradient-to-b from-white/5 to-white backdrop-blur-sm z-0" />

          </div>
        </div>
        <div className='md:w-[25%]'>
          <div className='flex bg-[#8BE8FF] px-5 py-2 rounded-3xl'>
            <div className='w-7 h-7 rounded-full bg-black flex justify-center items-center text-white'>
              <span className='font-bold'>1</span>

            </div>
            
            

          </div>
        </div>

      </div>
      
    </section>
  );
};

export default HeroSection;