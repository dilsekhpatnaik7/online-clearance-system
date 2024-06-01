import React, { useState, useEffect } from 'react'
import './GetClearance.css'
import nist from '../../assets/nist.png'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const GetClearance = () => {
    const navigate = useNavigate();


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [rollno, setRollNo] = useState();
    const [phoneno, setPhoneNo] = useState();
    const [branch, setBranch] = useState();
    const [year, setYear] = useState();
    const [acad, setAcad] = useState();
    const [mess, setMess] = useState();
    const [library, setLibrary] = useState();
    const [other, setOther] = useState();


    const fetchFun = () => {
        const email = window.sessionStorage.getItem('token');
        if(!email) {
            alert("You are Not Logged In... Login to View...");
            navigate('/');
        }
        try {
          const check = axios.post("https://online-clearance-system-backend.vercel.app/getclearance", {email: email})
          .then((res) => {
            const data = res.data;
            setName(data.student.name);
            setEmail(data.student.email);
            setRollNo(data.student.rollno);
            setPhoneNo(data.student.phoneno);
            setBranch(data.student.branch);
            setYear(data.student.year);
            setAcad(data.student.acad_hostel);
            setMess(data.student.mess);
            setLibrary(data.student.library);
            setOther(data.student.extra);
          })
          .catch((error) => {
            console.log(error)
          })
        } catch (error) {
          console.log(error);
    
        }
      }
    
      useEffect(() => {
        fetchFun();
      },[]);




  const handleClick = () => {
    const email = sessionStorage.getItem('token');
    if(!email) {
        alert("You are Not Logged In... Login to View...");
        navigate('/');
    } else {
        window.print();
    }
  }
  return (
    <div>
      <div className='pl-80 pt-28 px-36 text-center'>
      <div className="to-be-printed relative overflow-x-auto shadow-lg rounded-lg border-gray-900">
        <table className="w-full text-sm text-left border-gray-900">
            <caption class="p-2 text-white text-2xl font-semibold bg-gray-900 print-title">
              <div className='mb-4'>
                <img
                className="mx-auto h-12 w-auto"
                src={nist}
                alt="Your Company"
              />
              <h6 className='text-sm'>National Instiute of Science and Technology, Pallur Hills, Berhampur, Odisha-761008</h6>
              </div>
                NIST Online Clearance System
            </caption>
            <tbody>
                <tr className="bg-gray-200">
                    <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                        Name of the Student
                    </th>
                    <td class="font-medium text-gray-900 px-6 py-3">
                        {name}
                    </td>
                </tr>

                <tr className="bg-gray-200">
                    <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                        Year
                    </th>
                    <td class="font-medium text-gray-900 px-6 py-3">
                        {year}
                    </td>
                </tr>

                <tr className="bg-gray-200">
                    <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                        NIST Email
                    </th>
                    <td className="font-medium text-gray-900 px-6 py-3">
                        {email}
                    </td>
                </tr>

                <tr className="bg-gray-200">
                    <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                        NIST Roll Number
                    </th>
                    <td class="font-medium text-gray-900 px-6 py-3">
                        {rollno}
                    </td>
                </tr>

                <tr className="bg-gray-200">
                    <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                        Phone No.
                    </th>
                    <td class="font-medium text-gray-900 px-6 py-3">
                        +91 {phoneno}
                    </td>
                </tr>

                <tr className="bg-gray-200">
                    <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                        Branch
                    </th>
                    <td class="font-medium text-gray-900 px-6 py-3">
                        {branch}
                    </td>
                </tr>

                <tr className="bg-gray-200">
                    <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                        Academics and Hostel Dues
                    </th>
                    <td class="font-medium text-gray-900 px-6 py-3">
                        Rs. {acad}
                    </td>
                </tr>

                <tr className="bg-gray-200">
                    <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                        Mess Dues
                    </th>
                    <td class="font-medium text-gray-900 px-6 py-3">
                        Rs. {mess}
                    </td>
                </tr>

                <tr className="bg-gray-200">
                    <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                        Library Dues
                    </th>
                    <td class="font-medium text-gray-900 px-6 py-3">
                        Rs. {library}
                    </td>
                </tr>

                <tr className="bg-gray-200">
                    <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                        Other Dues
                    </th>
                    <td class="font-medium text-gray-900 px-6 py-3">
                        Rs. {other}
                    </td>
                </tr>
            </tbody>
        </table>
            <div className='hidden print-main font-semibold text-lg'>
                <h2>
                    This online generated form needs to be verified from the following which will be required for further proceedings.
                </h2>
            </div>
            <div className='hidden print-main-sign'>
                <div>
                    <h2 className='font-semibold'>Sri Kailash Nath Mallick</h2>
                    <div className='flex flex-col'>
                        <div><h3>Comptroller of Finance</h3></div>
                        <div><h3>and Accounts</h3></div>
                    </div>
                </div>

                <div>
                    <h2 className='font-semibold'>Ms. Soumya Mudali</h2>
                    <h3>Accounts Dept. </h3>
                </div>

                <div>
                    <h2 className='font-semibold'>{name}</h2>
                    <h3>{rollno}</h3>
                </div>
            </div>
      </div>
        <button className='mt-4 shadow-lg bg-gray-900 w-60 p-2 rounded-full text-white hover:bg-gray-700' onClick={handleClick}>Get Clearence Report</button>
      </div>
    </div>
  )
}

export default GetClearance
