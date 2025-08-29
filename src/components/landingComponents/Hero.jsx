import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return(
   <section className='relative flex items-center justify-center text-white'>
    <div className='absolute top-0 left-0 w-full h-full -z-20'>
        <img src="https://www.travelanddestinations.com/wp-content/uploads/2020/02/Travel-Destinations.jpg" alt="" srcset="" className='w-full h-full'/>
    </div>
    <div className='absolute h-full w-full top-0 left-0 bg-black/60
        -z-10'>

    </div>
    <div className='flex flex-col items-center justify-center text-center gap-6 min-h-[80vh] max-w-2/3 px-4'>
        <h1 className='text-4xl md:text-4xl ;md:text-7xl font-bold'>
            Explore the world with WanderWisw
        </h1>
        <p className='text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione vitae totam
        </p>
        <Button>Get started</Button>
    </div>
   </section>  
    
  )
}

export default Hero
