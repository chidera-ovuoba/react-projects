import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';
const Submenu = () => {
  const { page, links, position, mouse } = useGlobalContext();
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { bottom,right,left } = position;
  const refContainer = useRef(null);
  console.log(position);
  // console.log(page,links)
 
  useEffect(() => {
    refContainer.current.style.left = `${(left + right) / 2}px`
    refContainer.current.style.top = `${bottom - 3}px`
  },[left,right,bottom])

  return <>
    <div className={`submenu ${mouse ? 'show' : ''}`} ref={refContainer}
      
    >
      <div>
        <h4>{page}</h4>
        <div  className={`submenu-center col-${links.length}`}>
        {links.map((item, i) => {
          const { label, icon, url } = item;
          return <a href={url} key={i}>{icon}{label}</a>  
        })}
          </div>
      </div>
    </div>
  </>
}

export default Submenu
