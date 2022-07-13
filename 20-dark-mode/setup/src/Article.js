import React from 'react'
import moment from 'moment'
const Article = ({title,date,length,snippet}) => {
  return <>
    <div className="post">
      <h2>{title}</h2>
      <div className="post-info">
      {moment(date).format('dddd Do, YYYY')} <span> {length} min read
        </span></div>
      <p>{snippet}</p>
    </div>
  </>
}

export default Article
 