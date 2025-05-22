import React from 'react'
import { ArrowRight, Download, Battery, ArrowLeft, Wifi, ChartNoAxesColumnIncreasing, WifiIcon, BatteryFull, Pointer, RotateCw, RotateCcw} from 'lucide-react';


const CardSection = () => {
  return (
    <div className='space-y-2'>
        <div className='flex justify-between items-center'>
            <span className='text-xs '>11:36</span>
            <div className='space-x-3 flex '>
                <ChartNoAxesColumnIncreasing size={16}  />
                <WifiIcon size={16}  />
                <BatteryFull size={16} />
            </div>
        </div>
        <div className='flex justify-between items-center text-xs'>
            <div className='flex space-x-2'>
                <RotateCcw size={16}/>
                swipe right
            </div>
            <div className='flex space-x-2'>
                <RotateCw size={16} />
                swipe left
            </div>
        </div>
        
    </div>
  )
}

export default CardSection