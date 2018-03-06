import { combineReducers } from 'redux' // 3.7.2

import users from './usersReducer'

const LoginApp = combineReducers({
  users:users
})

export default LoginApp