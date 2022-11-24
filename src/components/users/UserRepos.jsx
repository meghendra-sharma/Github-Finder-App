import React from 'react'
import Spinner from '../layout/Spinner'
import RepoItem from './repos/RepoItem'


function UserRepos({repos , loading}) {
  return ( loading ? <Spinner/> :
    <div className='container w-75'>
        <h2 className='text-white fw-bolder'>Latest Repositories</h2>
        <div className='vstack gap-3'>
            {repos.map((repo) => {
                return <RepoItem key={repo.id} repo={repo}/>
            })}
        </div>
    </div>
  )
}

export default UserRepos
