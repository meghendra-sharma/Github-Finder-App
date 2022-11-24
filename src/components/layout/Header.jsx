import React from 'react'
import {Link} from 'react-router-dom'
import {BsGithub} from 'react-icons/bs'

function Header() {
  return (
    
        
    <nav className="navbar bg-dark px-5 sticky-top">
        <div className="container-fluid">
            {/* <a className="navbar-brand text-white fw-bold"><BsGithub/> Github Finder</a> */}
            <Link className="navbar-brand text-white fw-bold " to = "/"><span><BsGithub/></span><span className='align-middle'> Github Finder</span></Link>
            <div className='d-flex'>
                <Link className='btn btn-dark fw-bold' to = "/">HOME</Link>
                <Link className='btn btn-dark fw-bold' to = "/about">ABOUT</Link>
            </div>
        </div>
    </nav>
    
    
  )


}

export default Header

// position-sticky top-0 start-0 end-0"