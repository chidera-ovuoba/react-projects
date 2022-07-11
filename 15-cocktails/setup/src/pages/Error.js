import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <div className="error-page">
        <div className="error-container">
          <h2>Oops! It's A Dead End</h2>
          <Link className="btn btn-primary" to='/'>
          Back Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error
