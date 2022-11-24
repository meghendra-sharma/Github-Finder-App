import React from 'react'
import {Link} from 'react-router-dom'

function UserProfile({user}) {
  return (
    <div>
        <div className='container w-75'>
            <Link to = "/" className='btn btn-secondary px-0 fw-bolder'> BACK TO SEARCH </Link>
            <div className='row'>
                <div className='col-sm-4 my-2 position-relative px-0'>
                    <img className='img-fluid rounded' src= {`${user.avatar_url}`} alt="" />
                    <div className='position-absolute bottom-0 start-0 p-2 p-lg-4  h-auto '>
                    <p className='mb-0 fw-bold'>{user.name ? user.name : "No User Name"}</p>
                    <p className='mb-0'>{user.login}</p>
                    </div>
                    </div>
                <div className='col-sm-8 my-2'>
                    <h2 className='fs-3 fw-bolder'>{user.name ? user.name : "No User Name"} <span class="badge rounded-pill text-bg-success fs-6 align-middle">User</span>
                    <span class="badge rounded-pill text-bg-primary fs-6 align-middle">Hirable</span></h2>
                    <p className='text-white'>{user.bio ? user.bio : "This user does not have bio."}</p>
                    <a className='btn btn-outline-light fw-bold' href= {user.html_url} target = '_blank' rel='noopener noreferrer'>VISIT GITHUB PROFILE</a>
                    <div className='container-fluid shadow-sm p-3 bg-secondary rounded my-4'>
                        <div className='row justify-content-between'>
                            <div className='col-sm-3 my-2 my-sm-0'>
                                <div className='text-dark opacity-50'>Location</div>
                                <div className='fw-bold'>{user.location ? user.location : "None"}</div>
                            </div>
                            <div className='col-sm-3 my-2 my-sm-0'>
                                <div className='text-dark opacity-50'>Website</div>
                                <div className='fw-bold'>{user.blog ? user.blog : "None"}</div>
                            </div>
                            <div className='col-sm-3 my-2 my-sm-0'>
                                <div className='text-dark opacity-50'>Twitter</div>
                                <div className='fw-bold'>{user.twitter_username ? user.twitter_username : "None"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserProfile
