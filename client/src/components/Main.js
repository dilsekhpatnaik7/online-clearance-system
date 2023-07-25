import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Side from './Side'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios';


const Main = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [rollno, setRollNo] = useState()

  const fetchFun = () => {
    const email = window.sessionStorage.getItem('token');
    if(!email) {
      alert("You are Not Logged In... Login to View...");
      navigate('/');
    }
    try {
      const check = axios.post("http://localhost:5000/home", {email: email})
      .then((res) => {
        const data = res.data;
        setName(data.name.name);
        setRollNo(data.name.rollno);
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
    <div>
      <Navbar/>
      <Side studentName = {name} rollNumber = {rollno}/>
      <Outlet/>
    </div>
  )
}

export default Main
