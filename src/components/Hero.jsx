import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className='p-20 flex gap-7 grid-cols-2'>
        {/* left paragraph part */}
      <div>
        <h1 className='text-4xl font-extrabold'>
            Manage Your Trip With Ease using Wanderwise
        </h1>
        <p className='mt-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Ut architecto minima recusandae vero corporis a ipsam magni non, 
            enim .</p>
            <Button className={"mt-6"}>Book trip</Button>
      </div>
      {/* right image part */}
      <div className='flex justify-center items-center'>
        <img className='w-60 h-60 ' src="/vite.svg" alt="hero image"/>
      </div>
    </section>
  )
}

export default Hero
