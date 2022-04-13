import Cookies from 'js-cookie'

import {Redirect, withRouter} from 'react-router-dom'

import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')

  const navigateToHome = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  const onClickLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      navigateToHome(data.jwt_token)
    }
  }

  if (jwtToken !== undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="login-container">
      <h1 className="login-heading">Please Login</h1>

      <button type="button" onClick={onClickLogin} className="login-button">
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
