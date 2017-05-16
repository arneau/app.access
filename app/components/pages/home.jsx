import React from 'react'
import PropTypes from 'prop-types'

import { LoginActions } from '../../actions'

class HomePage extends React.Component {

  static contextTypes = {
    dispatch: PropTypes.func,
    state: PropTypes.object
  }

  componentWillMount = () => {
    let dispatch = this.context.dispatch
    dispatch(LoginActions.fetchAll())
  }

  render () {
    let state = this.context.state, ids = Object.keys(state.entities.logins)
    return (
      <ul>
        {
          ids.map((id) => {
            return (
              <li key={id}>{state.entities.logins[id].website}</li>
            )
          })
        }
      </ul>
    )
  }

}

export default HomePage