import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({_class,url,text}) => {
  return (
    <>
        <Link className={`btn ${_class}`} to={url}>{text}</Link>
    </>
  )
}

export default Button