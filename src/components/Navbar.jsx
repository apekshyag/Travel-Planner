import React from 'react'
import { Button } from './ui/button'

const Navbar = ({data, color}) => {
    
  return (
    /*<div className='flex justify-between p-10 bg-blue-100'>
        <h1 className='hover:bg-red-500'>Company Name: {data.firstName} </h1>
        <Button className={color=="red"?"bg-red-400":"bg-blue-400"}>Login</Button>
    </div>*/

    <header className='flex justify-between items-center bg-emerald-400 py-2 px-7'>
        
        {/* logo and company name*/}
        <div className='flex items-center gap-4'>
            <img src="/vite.svg" alt="logo" />
            <h1 className='text-xl font-bold'>Clove IT</h1>
        </div>

        {/* links and buttons */}
        <div className='flex items-center gap-4'>
            <div className='flex items-center gap-6 [&>a]:hover:underline'>
                <a href="#"className='hover:underline hover:text-red-800'>Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        <div>
            <a href="/login">
        <Button className={"cursor-progress"}>Sign in</Button>
</a>
        </div>
        </div>
    </header>
  )
}

export default Navbar