import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Protected = (props) => {
  const {Component} = props
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if(!token) navigate('/');
  })

  return (
    <>
      <Component/>
    </>
  )
}

export default Protected
