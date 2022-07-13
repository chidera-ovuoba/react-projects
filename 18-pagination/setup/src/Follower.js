import React from 'react'

const Follower = ({ avatar_url, login, html_url }) => {
  return <>
    <div className="card">
    <img src={avatar_url} alt="" />
      <h4>{login}</h4>
      <a href={html_url} className='btn'>view profile</a>
    </div>
  
  </>

}

export default Follower
