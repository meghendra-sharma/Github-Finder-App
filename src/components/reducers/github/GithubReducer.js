const GithubReducer = (state,action) => {

    switch(action.type){

        case "START_FETCHING":
            return { ...state , loading : true}
        case "FETCH_END":
            return  {...state , loading : false , usersList : action.payload}
        case "CLEAR_RESULT":
            return {...state , usersList : []}
        case "USER_FETCHED":
            return {...state , loading : false , user : action.payload}
        case "REPOS_FETCHED":
            return {...state , loading : false , repos : action.payload}
        case "SET_LOADING_FALSE":
            return {...state , loading : false}
        default :
            return state
    }

}

export default GithubReducer