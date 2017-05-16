import { queryGraphQL } from '../functions'

import {
  HYDRATE_STATE
} from '../types'

const fetchAll = () => {
  let query = `
    query {
      Logins {
        id
        password
        username
        website
      }
    }
  `
  return (dispatch) => {
    return queryGraphQL(query)
    .then((payload) => {
      dispatch({
        type: HYDRATE_STATE,
        payload: payload
      })
    })
  }
}

export {
  fetchAll
}