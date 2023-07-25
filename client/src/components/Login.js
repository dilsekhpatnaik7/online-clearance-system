import React from 'react'
import { useState, useEffect } from 'react'
import nist from '../assets/nist.png'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const fetchFun = () => {
    const email = window.sessionStorage.getItem('token');
    if(email) navigate('/home');
  }

  useEffect(() => {
    fetchFun();
  })

  const loginUser = async (e) => {
    e.preventDefault();
    console.log(email, password);
    if(!email || !password) {
      alert("Invalid Credentials");
      navigate('/')
    }
    
    try {
      await axios.post("http://localhost:5000/login", {email: email, password: password})
      .then((res) => {
        const data = res.data;
        console.log(data)
        if(data.status === 'OK') {
          alert("Login Successfully"); 
          window.sessionStorage.setItem('token', data.user)
          console.log(data.user);
          navigate('/home');
        } else {
          alert("Invalid Credentials...")
          navigate('/');
        }  
      })
      .catch((error) => {
        console.log(error);
        navigate('/');
      });

    } catch (error) {
      alert("Invalid Credentials...")
      console.log(error);
      navigate('/');
    }
  }

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-30 w-auto"
            src={nist}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            NIST Online Clearance System
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST" onSubmit={loginUser} action='/login'>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-full bg-gray-900 hover:bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
