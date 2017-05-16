import React from 'react'
import PropTypes from 'prop-types'

import { LoginActions } from '../../actions'

import LoginElement from '../elements/login.jsx'

import styles from './home.scss'

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
      <div className={styles.home}>
        <input className={styles.filter} placeholder="Filter" type="text" />
        <ul className={styles.logins}>
          {
            ids.map((id) => {
              return (
                <LoginElement id={id} key={id} />
              )
            })
          }
        </ul>
      </div>
    )
  }

}

export default HomePage