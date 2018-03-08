import {Actions} from "react-native-router-flux"; // 4.0.0-beta.28
import data  from '../user.json';
let array = data;
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


export const get_data =()=>{	
	return dispatch => {
		dispatch({
			type: 'GET_DATA',listData : array
		});
    }
}

export const  save_data = (user)=>{
  array.push(user);
	return dispatch => {
		dispatch({
			type: 'GET_DATA',payload : array
		});
    }
	
}