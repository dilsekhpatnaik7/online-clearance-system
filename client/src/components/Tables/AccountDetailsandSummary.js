import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AccountDetailsandSummary = () => {
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [rollno, setRollNo] = useState();
    const [branch, setBranch] = useState();
    const [phoneno, setPhoneNo] = useState();
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
          const check = axios.post("http://localhost:5000/accountdetails", {email: email})
          .then((res) => {
            const data = res.data;
            setName(data.student.name);
            setEmail(data.student.email);
            setRollNo(data.student.rollno);
            setBranch(data.student.branch);
            setPhoneNo(data.student.phoneno)
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

  return (
    <>
        <div className='pl-80 pt-28 px-36 text-center'>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left">
                  <caption class="p-2 text-white text-2xl font-semibold bg-gray-900">
                      Student Details
                  </caption>
                  <tbody>
                      <tr className="bg-gray-200">
                          <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                              Student Name
                          </th>
                          <td class="font-medium text-gray-900 px-6 py-3">
                              {name}
                          </td>
                      </tr>

                      <tr className="bg-gray-200">
                          <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                              NIST Email
                          </th>
                          <td class="font-medium text-gray-900 px-6 py-3">
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
                              {phoneno}
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
                              Year
                          </th>
                          <td class="font-medium text-gray-900 px-6 py-3">
                              {year}
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>



          {/* {Dues Table} */}
          <div className='pt-7'>
            <div class="relative overflow-x-auto shadow-lg rounded-lg border-gray-900">
                <table class="w-full text-sm text-left border-gray-900">
                    <caption class="p-2 text-white text-2xl font-semibold bg-gray-900">
                        Dues Pending
                    </caption>
                    <tbody>
                        <tr className="bg-gray-200">
                            <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                                Academics and Hostel
                            </th>
                            <td class="font-medium text-gray-900 px-6 py-3">
                                Rs. {acad}
                            </td>
                        </tr>

                        <tr className="bg-gray-200">
                            <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                                Mess
                            </th>
                            <td class="font-medium text-gray-900 px-6 py-3">
                                Rs. {mess}
                            </td>
                        </tr>

                        <tr className="bg-gray-200">
                            <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                                Library
                            </th>
                            <td className="font-medium text-gray-900 px-6 py-3">
                                Rs. {library}
                            </td>
                        </tr>

                        <tr className="bg-gray-200">
                            <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                                Others
                            </th>
                            <td class="font-medium text-gray-900 px-6 py-3">
                                Rs. {other}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
    </>
  )
}

export default AccountDetailsandSummary
