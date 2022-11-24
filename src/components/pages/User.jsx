import React , {useContext , useEffect} from 'react'
import GithubContext from '../context/github/GitHubContext'
import {useParams} from 'react-router-dom'
import Spinner  from '../layout/Spinner'
import UserProfile from '../users/UserProfile'
import UserStats from '../users/UserStats'
import UserRepos from '../users/UserRepos'

function User() {

    const {searchUserResult , getUserByLoginName ,getUserRepos} = useContext(GithubContext)
    const {loginname} = useParams()

    useEffect(() => {
        getUserByLoginName(loginname)
        getUserRepos(loginname)
    } , [])

  return ( searchUserResult.loading ? <Spinner/> :
    <div className='text-white my-5'>
      <UserProfile user = {searchUserResult.user}/>
      <UserStats user = {searchUserResult.user}/>
      <UserRepos repos = {searchUserResult.repos} loading = {searchUserResult.loading}/>
    </div>
  )
}

export default User
