import { PlayCircle } from 'lucide-react'
import React from 'react'

const Testimonial = () => {
  return (
    <section id="testimonials" className='md:w-[80%]  mx-auto pt-24 '>
        <div className='flex flex-col items-center justify-center max-w-md mx-auto '>
             <div className='flex items-center space-x-3'>
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
            <h1 className='font-semibold text-center text-4xl mt-3'>Thousands Of People Trusts <span className='font-dancing'>Build</span></h1>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4  gap-5 py-16 '>
            <div className='flex flex-col justify-center space-y-5'>
                <div className='space-y-3 pb-3 rounded-xl shadow-xl border border-black'>
                    <div className='relative'>
                        <img src="images/TestimonialImg1.jpg" alt="" className='rounded-xl' />
                        {/* Play icon centered */}
                        <div className='absolute inset-0 flex items-center justify-center'>
                        <PlayCircle size={50} className="text-white/90 hover:scale-110 transition-transform cursor-pointer drop-shadow-lg" />
                        </div>
                    </div>
                    <div className='mx-3  flex items-center space-x-5'>
                        <img src="images/TestimonialImg2.jpg" alt="" className='rounded-full h-10 w-10' />
                        <div>
                            <h3 className='text-md font-medium'>Christiana J - <span className='font-dancing'>Nigeria</span></h3>
                            <p className='text-sm text-gray-600'>Data Analyst</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-3 pb-3 rounded-xl shadow-xl border border-black'>
                    <div className='m-3'>
                        <h2 className='text-sm font-semibold'>“What I love most is the community vibe. I’ve met collaborators, mentors, and even clients just by posting and engaging.”</h2>
                    </div>
                    <div className='border-b  border-gray-500'></div>
                    <div className='mx-3  flex items-center space-x-5'>
                        <img src="images/TestimonialImg3.jpg" alt="" className='rounded-full h-10 w-10' />
                        <div>
                            <h3 className='text-md font-medium'>Anna K - <span className='font-dancing'>kenya</span></h3>
                            <p className='text-sm text-gray-600'>Content Creator</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-3 pb-3 rounded-xl shadow-xl border border-black'>
                    <div className='relative'>
                        <img src="images/TestimonialImg4.jpg" alt="" className='rounded-xl' />
                        {/* Play icon centered */}
                        <div className='absolute inset-0 flex items-center justify-center'>
                        <PlayCircle size={50} className="text-white/90 hover:scale-110 transition-transform cursor-pointer drop-shadow-lg" />
                        </div>
                    </div>
                    <div className='mx-3  flex items-center space-x-5'>
                        <img src="images/TestimonialImg4.jpg" alt="" className='rounded-full h-10 w-10' />
                        <div>
                            <h3 className='text-md font-medium'>Prianna A - <span className='font-dancing'>United State</span></h3>
                            <p className='text-sm text-gray-600'>Trader</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center space-y-5'>
                <div className='space-y-3 pb-3 rounded-xl shadow-xl border border-black'>
                    <div className='m-3'>
                        <h2 className='text-sm font-semibold'>“I sell skincare products on my Hustle storefront, and I’ve reached customers in 3 countries already. This app is a game-changer.”</h2>
                    </div>
                    <div className='border-b  border-gray-500'></div>
                    <div className='mx-3  flex items-center space-x-5'>
                        <img src="images/TestimonialImg5.jpg" alt="" className='rounded-full h-10 w-10' />
                        <div>
                            <h3 className='text-md font-medium'>Faith M - <span className='font-dancing'>Mauristius</span></h3>
                            <p className='text-sm text-gray-600'>Beauty Enterpreneur</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-3 pb-3 rounded-xl shadow-xl border border-black'>
                    <div className='m-3'>
                        <h2 className='text-sm font-semibold'>“Since joining Hustle, I’ve tripled my freelance income. The job board and wallet features make everything so easy.”</h2>
                    </div>
                    <div className='border-b  border-gray-500'></div>
                    <div className='mx-3  flex items-center space-x-5'>
                        <img src="images/TestimonialImg3.jpg" alt="" className='rounded-full h-10 w-10' />
                        <div>
                            <h3 className='text-md font-medium'>Anna K - <span className='font-dancing'>kenya</span></h3>
                            <p className='text-sm text-gray-600'>Content Creator</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-3 pb-3 rounded-xl shadow-xl border border-black'>
                    <div className='m-3'>
                        <h2 className='text-sm font-semibold'>“What I love most is the community vibe. I’ve met collaborators, mentors, and even clients just by posting and engaging.”</h2>
                    </div>
                    <div className='border-b  border-gray-500'></div>
                    <div className='mx-3  flex items-center space-x-5'>
                        <img src="images/TestimonialImg3.jpg" alt="" className='rounded-full h-10 w-10' />
                        <div>
                            <h3 className='text-md font-medium'>Anna K - <span className='font-dancing'>kenya</span></h3>
                            <p className='text-sm text-gray-600'>Content Creator</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-3 pb-3 rounded-xl shadow-xl border border-black'>
                    <div className=''>
                        <video src="videos/Quickone.mp4" className="rounded-xl w-full h-full " controls autoPlay muted loop />
                    </div>
                    <div className='mx-3  flex items-center space-x-5'>
                        <img src="images/TestimonialImg4.jpg" alt="" className='rounded-full h-10 w-10' />
                        <div>
                            <h3 className='text-md font-medium'>Prianna A - <span className='font-dancing'>United State</span></h3>
                            <p className='text-sm text-gray-600'>Trader</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='flex flex-col justify-center space-y-5'>
                <div className='space-y-3 pb-3 rounded-xl shadow-xl border border-black'>
                    <div className=''>
                        <video src="videos/Quickone.mp4" className="rounded-xl w-full h-full " controls autoPlay muted loop />
                    </div>
                    <div className='mx-3  flex items-center space-x-5'>
                        <img src="images/TestimonialImg2.jpg" alt="" className='rounded-full h-10 w-10' />
                        <div>
                            <h3 className='text-md font-medium'>Christiana J - <span className='font-dancing'>Nigeria</span></h3>
                            <p className='text-sm text-gray-600'>Data Analyst</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-3 pb-3 rounded-xl shadow-xl border border-black'>
                    <div className='m-3'>
                        <h2 className='text-sm font-semibold'>“What I love most is the community vibe. I’ve met collaborators, mentors, and even clients just by posting and engaging.”</h2>
                    </div>
                    <div className='border-b  border-gray-500'></div>
                    <div className='mx-3  flex items-center space-x-5'>
                        <img src="images/TestimonialImg3.jpg" alt="" className='rounded-full h-10 w-10' />
                        <div>
                            <h3 className='text-md font-medium'>Anna K - <span className='font-dancing'>kenya</span></h3>
                            <p className='text-sm text-gray-600'>Content Creator</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-3 pb-3 rounded-xl shadow-xl border border-black'>
                    <div className='relative'>
                        <img src="images/TestimonialImg4.jpg" alt="" className='rounded-xl' />
                        {/* Play icon centered */}
                        <div className='absolute inset-0 flex items-center justify-center'>
                        <PlayCircle size={50} className="text-white/90 hover:scale-110 transition-transform cursor-pointer drop-shadow-lg" />
                        </div>
                    </div>
                    <div className='mx-3  flex items-center space-x-5'>
                        <img src="images/TestimonialImg4.jpg" alt="" className='rounded-full h-10 w-10' />
                        <div>
                            <h3 className='text-md font-medium'>Prianna A - <span className='font-dancing'>United State</span></h3>
                            <p className='text-sm text-gray-600'>Trader</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center space-y-5'>
                <div className='space-y-3 pb-3 rounded-xl shadow-xl border border-black'>
                    <div className='m-3'>
                        <h2 className='text-sm font-semibold'>“What I love most is the community vibe. I’ve met collaborators, mentors, and even clients just by posting and engaging.”</h2>
                    </div>
                    <div className='border-b  border-gray-500'></div>
                    <div className='mx-3  flex items-center space-x-5'>
                        <img src="images/TestimonialImg3.jpg" alt="" className='rounded-full h-10 w-10' />
                        <div>
                            <h3 className='text-md font-medium'>Anna K - <span className='font-dancing'>kenya</span></h3>
                            <p className='text-sm text-gray-600'>Content Creator</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-3 pb-3 rounded-xl shadow-xl border border-black'>
                    <div className='relative'>
                        <img src="images/TestimonialImg1.jpg" alt="" className='rounded-xl' />
                        {/* Play icon centered */}
                        <div className='absolute inset-0 flex items-center justify-center'>
                        <PlayCircle size={50} className="text-white/90 hover:scale-110 transition-transform cursor-pointer drop-shadow-lg" />
                        </div>
                    </div>
                    <div className='mx-3  flex items-center space-x-5'>
                        <img src="images/TestimonialImg4.jpg" alt="" className='rounded-full h-10 w-10' />
                        <div>
                            <h3 className='text-md font-medium'>Prianna A - <span className='font-dancing'>United State</span></h3>
                            <p className='text-sm text-gray-600'>Trader</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-3 pb-3 rounded-xl shadow-xl border border-black'>
                    <div className='m-3'>
                        <h2 className='text-sm font-semibold'>“What I love most is the community vibe. I’ve met collaborators, mentors, and even clients just by posting and engaging.”</h2>
                    </div>
                    <div className='border-b  border-gray-500'></div>
                    <div className='mx-3  flex items-center space-x-5'>
                        <img src="images/TestimonialImg3.jpg" alt="" className='rounded-full h-10 w-10' />
                        <div>
                            <h3 className='text-md font-medium'>Anna K - <span className='font-dancing'>kenya</span></h3>
                            <p className='text-sm text-gray-600'>Content Creator</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </section>
  )
}

export default Testimonial