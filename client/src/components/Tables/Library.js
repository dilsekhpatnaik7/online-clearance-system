import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Library = () => {
  const navigate = useNavigate();

  const[library, setLibrary] = useState();

  const fetchFun = () => {
    const email = window.sessionStorage.getItem('token');
    if(!email) {
      alert("You are Not Logged In... Login to View...");
      navigate('/');
    }
    try {
      const check = axios.post("http://localhost:5000/library", {email: email})
      .then((res) => {
        const data = res.data;
        setLibrary(data.student.library);
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
        <div className=''>
                <div class="relative overflow-x-auto shadow-lg rounded-lg border-gray-900">
                    <table class="w-full text-sm text-left border-gray-900">
                        <caption class="p-2 text-white text-2xl font-semibold bg-gray-900">
                            Library Dues
                        </caption>
                            <tr className="bg-gray-200">
                                <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                                    Library Dues
                                </th>
                                <td class="font-medium text-gray-900 px-6 py-3">
                                    Rs. {library}
                                </td>
                            </tr>
                    </table>
                </div>
              </div>
      </div>
    </>
  )
}

export default Library
