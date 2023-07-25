import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate();

    const fetchFun = () => {
        const email = window.sessionStorage.getItem('token');
        if(email) navigate('/home');
        else navigate('/');
    }

    useEffect(() => {
        fetchFun();
    })

  return (
    <></>
  )
}

export default Error
