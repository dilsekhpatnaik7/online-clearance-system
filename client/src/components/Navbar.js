import React from 'react'
import nist from '../assets/nist.png'

const Navbar = () => {
  return (
    <>
    <nav className="p-6 w-full h-22 text-white bg-gray-900 text-center fixed">
        <div className="flex items-center justify-center">
        <a href="https://nist.edu" className="flex items-center">
            <img
            src={nist}
            className="h-10 mr-3"
            alt="Flowbite Logo"
            />
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
            NIST Online Clearance System
            </span>
        </a>
        </div>
    </nav>
</>
  )
}

export default Navbar
