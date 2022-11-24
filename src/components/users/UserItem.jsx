import React from 'react'
import {Link} from 'react-router-dom'

function UserItem({user}) {
  return (
    <div className=" shadow rounded py-2 my-2  col-sm-6 col-md-4 col-lg-3  ">  <div className='container-fluid'>
          <div className='row'>
            < img className='col-4 rounded-circle' src={user.avatar_url} alt="" />
            <div className='col-8'>
              <div className='fw-bold'>{user.login}</div>
              <Link className = 'text-dark text-decoration-none fw-light' to = {`/users/${user.login}`}>View Profile</Link>
              </div>
          </div>
          </div>
           </div>
  )
}

export default UserItem
