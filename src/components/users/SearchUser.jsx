import React  , {useContext, useState} from 'react'
import GithubContext from '../context/github/GitHubContext'

function SearchUser() {
  const [inputText , setInputText] = useState("")
  const { searchUserResult ,  searchUsers , clearSearchResult} = useContext(GithubContext)


  function handleChange (event){
    const text = event.target.value
    setInputText(text)

  }

  function handleClick(){
    clearSearchResult()
  }

  function handleSubmit(event){

    event.preventDefault()

    if(inputText === ""){
      console.log("Invalid input text......")
    }
    else{
      searchUsers(inputText)
    }
    setInputText("")
    
  }

  return (
    <div className='container my-4'>
        <div className='row'>
        <form className='col-sm-4' onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                    <input onChange={handleChange} value={inputText} type="text" className="form-control " placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button  className="btn btn-dark fw-bold" type="submit" id="button-addon2">GO</button>
            </div>
        </form>
        <div style = {{ display : searchUserResult.usersList.length <= 0 ? "none"  : "initial"}} className='col-sm-2 text-start'><button onClick={handleClick} className='btn btn-secondary fw-bold'>CLEAR</button></div>
        </div>
    </div>
  )
}

export default SearchUser


