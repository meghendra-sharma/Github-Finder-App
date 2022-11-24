import React from 'react'
import {MdPeople} from 'react-icons/md'
import {IoIosPeople} from 'react-icons/io'
import {RiGitRepositoryFill} from 'react-icons/ri'
import {GiStack} from 'react-icons/gi'

function UserStats({user}) {
  return (
    <div className='container w-75 shadow-sm bg-secondary my-5 p-2'>
        <div className='row '>
            <div className='col-md-3 my-2 my-md-0'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <p className='my-0 text-dark opacity-50'>Followers</p>
                        <p className='fw-bolder fs-4 my-0'>{user.followers}</p>
                    </div>
                    <IoIosPeople className='text-warning fs-1 align-bottom'/>
                </div>
            </div>
            <div className='col-md-3 my-2 my-md-0'>
                <div className='d-flex justify-content-between'>
                        <div>
                            <p className='my-0 text-dark opacity-50'>Following</p>
                            <p className='fw-bolder fs-4 my-0'>{user.following}</p>
                        </div>
                        <MdPeople className='text-warning fs-1  align-bottom'/>
                    </div>
            </div>
            <div className='col-md-3 my-2 my-md-0'>
            <div className='d-flex justify-content-between'>
                        <div>
                            <p className='my-0 text-dark opacity-50'>Public Repos</p>
                            <p className='fw-bolder fs-4 my-0'>{user.public_repos}</p>
                        </div>
                        <RiGitRepositoryFill className='text-warning fs-1 align-bottom'/>
                    </div></div>
            <div className='col-md-3 my-2 my-md-0'>
            <div className='d-flex justify-content-between'>
                        <div>
                            <p className='my-0 text-dark opacity-50'>Public Gists</p>
                            <p className='fw-bolder fs-4 my-0'>{user.public_gists}</p>
                        </div>
                        <GiStack className='text-warning fs-1 align-bottom'/>
                    </div></div>
        </div>
    </div>
  )
}

export default UserStats
