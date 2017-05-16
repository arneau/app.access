import React from 'react'
import PropTypes from 'prop-types'

import styles from './login.scss'

class LoginElement extends React.Component {

  static contextTypes = {
    state: PropTypes.object
  }

  render () {
    let state = this.context.state, id = this.props.id, { password, username, website } = state.entities.logins[id]
    return (
      <li className={styles.login}>
        <div className={styles.details}>
          <h6>{website}</h6>
          <p>{username}</p>
        </div>
        <div className={styles.buttons}>
          <button>Copy username</button>
          <button>Copy password</button>
        </div>
      </li>
    )
  }

}

export default LoginElement