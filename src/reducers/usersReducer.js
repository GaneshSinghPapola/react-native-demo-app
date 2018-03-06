const users = (state = {login:[],signup:[]}, action) => {
  switch (action.type) {
    case 'LOGIN':
    return {
      login:action.userData
    }
    case 'SIGNUP':
      return {
        signup:action.userData
      }
      
      case 'DETAILs':
      return {
        allUsers:action.allUsers
      }
    default:
      return state
  }
}

export default users