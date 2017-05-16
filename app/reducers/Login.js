import { HYDRATE_STATE } from '../types'

const initialState = {}

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE_STATE:
      return {
        ...state,
        ...action.payload.entities.Logins
      }
    default:
      return state
  }
}

export default LoginReducer