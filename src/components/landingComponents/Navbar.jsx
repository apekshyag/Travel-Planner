import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <header className='flex items-center justify-between py-2 px-7 border-b'>
        <div className='flex items-center gap-4'>
            <img src="/vite.svg" alt="logo" />
            <h1>Wander Wise</h1>
        </div>

        <div className='flex gap-4'>
            <nav className='flex gap-4'>
                <a href="#features">Features</a>
                <a href="#trips">Trips</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#about">About</a>
                
            </nav>
<div>
    <Button>Login</Button>
</div>
        </div>


    </header>
  )
}

export default Navbar
