import {createContext , useReducer} from 'react'
import GithubReducer from '../../reducers/github/GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({children}) => {

    const initialState = {
        usersList : [] ,
        user : {} ,
        repos : [] ,
        loading : false
    }

    const [state,dispatch] = useReducer(GithubReducer , initialState)

    //This function will fetch the repos of the individual users

    const getUserRepos = async (loginName) => {
        const GITHUB_BASE_URL = process.env.REACT_APP_GITHUB_URL

        dispatch({
            type : 'START_FETCHING'
        })

        const response = await fetch(`${GITHUB_BASE_URL}/users/${loginName}/repos`)

        if(response.status === 404){
            window.location = '/notfound'

            dispatch({
                type : "SET_LOADING_FALSE"
            })
        }

        else{
            const data = await response.json()
            console.log(data)

            dispatch({
                type : 'REPOS_FETCHED',
                payload : data
            })
        }
    }

    //This function return the object of a user whose login name is passed on this function

    const getUserByLoginName = async (loginName) => {
        const GITHUB_BASE_URL = process.env.REACT_APP_GITHUB_URL
        dispatch({
            type : 'START_FETCHING'
        })

        const response = await fetch(`${GITHUB_BASE_URL}/users/${loginName}`)

        if(response.status === 404){
            window.location = '/notfound'

            dispatch({
                type : "SET_LOADING_FALSE"
            })
        }

        else{
            const data = await response.json()
            console.log(data)

            dispatch({
                type : 'USER_FETCHED',
                payload : data
            })
        }
        
    }

    //This function clears the search result list.

    function clearSearchResult(){
        dispatch({
            type : "CLEAR_RESULT"
        })

        
    }

    // This function search for all the users that match the given text
    const searchUsers = async (text) => {
        const params = new URLSearchParams({
            q : text
        })

        const GITHUB_BASE_URL = process.env.REACT_APP_GITHUB_URL

        console.log(GITHUB_BASE_URL)

        dispatch({
            type : "START_FETCHING"
        })

        const response = await fetch(`${GITHUB_BASE_URL}/search/users?${params}`)
        const {items} = await response.json()
        console.log(items)

        dispatch({
            type : "FETCH_END" , 
            payload : items
        })
    }

    //this fetchUsers function is for testing purpose only.. and it fetched all the users of the github
    const fetchUsers = async () => {
        
        dispatch({
            type : "START_FETCHING"
        })

        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`)
        const data = await response.json()
        console.log(data)
        
        dispatch({
            type : "FETCH_END" , 
            payload : data
        })
      }

      return <GithubContext.Provider value={{ searchUserResult : state , getUserByLoginName , fetchUsers , searchUsers , clearSearchResult , getUserRepos}}>
        {children}
      </GithubContext.Provider>

}

export default GithubContext
