import React from 'react'
import nist from '../assets/nist.png'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Side = ({studentName, rollNumber}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        const item = window.sessionStorage.getItem('token')
        if(item) {
            console.log(item);
            window.sessionStorage.removeItem('token');
            window.alert("LoggedOut Sucessfully");
            navigate('/');
        } else {
            window.alert("Login Again...");
            navigate('/');
        }
    }

  return (
    <div className='top-0 left-0'>
        {/* {Side Navigation} */}
        <div class="fixed pt-24 min-h-screen w-72 bg-gray-900 p-2 px-10 text-center text-white">
            {/* <div className='flex items-center justify-center w-20 mt-24'>
                <img src={nist}/>
            </div> */}

            <div className='p-4 text-white bg-gray-800 rounded-lg flex flex-col items-center justify-center'>
                <img className="w-12 rounded-full" src={nist} alt={nist}/>
                <h1 className='text-xl'>{studentName}</h1>
                <h6>{rollNumber}</h6>
            </div>

            {/* Nav Links */}
            <div class="text-sm m-10 flex flex-col items-center justify-center">
                <NavLink to='/home/about' className='w-60 my-1 rounded-full bg-gray-800 p-3 duration-500 hover:bg-gray-700'>About</NavLink>
                <NavLink to='/home/accountdetails' className='w-60 my-1 rounded-full bg-gray-800 p-3 duration-500 hover:bg-gray-700'>Account Details and Summary</NavLink>
                <NavLink to='/home/acadhostel' className='w-60 my-1 rounded-full bg-gray-800 p-3 duration-500 hover:bg-gray-700'>Academics and Hostel</NavLink>
                <NavLink to='/home/mess' className='w-60 my-1 rounded-full bg-gray-800 p-3 duration-500 hover:bg-gray-700'>Mess</NavLink>
                <NavLink to='/home/library' className='w-60 my-1 rounded-full bg-gray-800 p-3 duration-500 hover:bg-gray-700'>Library </NavLink>
                <NavLink to='/home/others' className='w-60 my-1 rounded-full bg-gray-800 p-3 duration-500 hover:bg-gray-700'>Others</NavLink>
                {/* <NavLink to='/home/now' className='w-60 my-1 rounded-full bg-gray-800 p-3 duration-500 hover:bg-gray-700'>Now</NavLink> */}
                <NavLink to='/home/getclearance' className='w-60 my-1 rounded-full bg-gray-800 p-3 duration-500 hover:bg-gray-700'>Get Clearance</NavLink>
            </div>

            {/* Logout Functionality */}
            <div class="bottom-0 text-center">
                <button class="w-24 rounded-full bg-gray-800 p-3 duration-500 hover:bg-gray-700" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Side



            // <ul>
            //     <li className='w-60 my-2 rounded-full bg-gray-800 p-3 duration-500 hover:bg-gray-700'>
            //         <NavLink to='/home/about'>About</NavLink>
            //     </li>
            //     <li className='w-60 my-2 rounded-full bg-gray-800 p-3 duration-500 hover:bg-gray-700'>
            //         <NavLink to='/home/accountdetails'>Account Details and Summary</NavLink>
            //     </li>
            //     <li className='w-60 my-2 rounded-full bg-gray-800 p-3 duration-500 hover:bg-gray-700'>
            //         <NavLink to='/home/acadhostel'>Academics and Hostel</NavLink>
            //     </li>
            //     <li className='w-60 my-2 rounded-full bg-gray-800 p-3 duration-500 hover:bg-gray-700'>
            //         <NavLink to='/home/mess'>Mess</NavLink>
            //     </li>
            //     <li className='w-60 my-2 rounded-full bg-gray-800 p-3 duration-500 hover:bg-gray-700'>
            //         <NavLink to='/home/library'>Library </NavLink>
            //     </li>
            //     <li className='w-60 my-2 rounded-full bg-gray-800 p-3 duration-500 hover:bg-gray-700'>
            //         <NavLink to='/home/others'>Others</NavLink>
            //     </li>
            //     <li className='w-60 my-2 rounded-full bg-gray-800 p-3 duration-500 hover:bg-gray-700'>
            //         <NavLink to='/home/getclearance'>Get Clearance</NavLink>
            //     </li>
            // </ul>