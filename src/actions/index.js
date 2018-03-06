import {Actions} from "react-native-router-flux"; // 4.0.0-beta.28
import data  from '../user.json';

export const getUser = () => {
  return dispatch => {
  dispatch({
    type:'DETAILs',
    allUsers:data
    })
  }
}

export const loginAction = (email,password) => {
  let loginUser = data.find((obj) => obj.email === email && obj.password === password)
  return dispatch => {
  dispatch({
    type:'LOGIN',
    userData:loginUser?loginUser:null
    })
  }
}

export const signupAction = ({name, email, password}) => {
  return dispatch => {
  dispatch({
    type:'SIGNUP',
    userData:{email,password}
    })
  }
}