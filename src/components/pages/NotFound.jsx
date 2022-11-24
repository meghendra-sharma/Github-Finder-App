import React from 'react'
import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className='container text-center text-white '>
      <h1 className='fw-bolder'>Oops!</h1>
      <h3>404 - Page not found!</h3>
      <Link className='btn btn-primary' to="/"><span><FaHome/></span> <span className='align-middle'>BACK TO HOME</span></Link>

    </div>
  )
}

export default NotFound