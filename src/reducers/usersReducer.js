const users = (state = { login : null, signup: null, allUsers: null, listData: null}, action) => {
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

      case 'GET_DATA':

      return {
        ...state,
        listData:action.listData
      }
      
      
    default:
      return state
  }
}

export default users