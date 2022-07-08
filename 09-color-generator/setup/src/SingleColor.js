import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, type,item,weight}) => {
  // console.log(item);
  const [state, setState] = useState(false);
  useEffect(() => {
    setTimeout(() => setState(false), 3000);

  }, [state])
  return <>
    <div 
      className={` color ${type == 'shade' ? "color-light" :''}`}
      style={{ backgroundColor: `${rgbToHex(rgb)}` }}
      onClick={() => {
        navigator.clipboard.writeText(item.hexString())
        setState(true)
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{item.hexString()}</p>
      <p className='alert'>{state ? 'Copied to clipBoard':''}</p>
    </div>
  
  </>
}

export default SingleColor
 