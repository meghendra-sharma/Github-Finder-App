import React , {useEffect , useContext} from 'react'
import GithubContext from '../context/github/GitHubContext'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

function SearchUserResult() {

    
  const {searchUserResult , fetchUsers} = useContext(GithubContext)
  useEffect( () => {
    // fetchUsers()
    // console.log(process.env.REACT_APP_GITHUB_URL)
  },[])

  
  return (
    searchUserResult.loading ? <Spinner/> :
    <div className='text-white fs-6 my-4 container'>
       {/* <div class="row">
      <div class="col-sm-6 col-md-4 col-lg-3">HOME</div>
      </div> */}


      <div className='row'>
        {searchUserResult.usersList.map( (user) => {
          return <UserItem key = {user.login} user = {user} />
        })}
      </div>

      

      
    </div>
  )
}

export default SearchUserResult
