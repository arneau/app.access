import { combineReducers } from 'redux'
import { routerReducer as RouterReducer } from 'react-router-redux'

import LoginReducer from './reducers/Login'

const Reducers = combineReducers({
  entities: combineReducers({
    logins: LoginReducer
  }),
  router: RouterReducer
})

export default Reducers