import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
   const refContainer = useRef(null);
   
  const toggle = () => {
    refContainer.current.classList.toggle('show-container');
   }
  return <nav>
    <div className='nav-center'>
    <div className="nav-header">
      <img src={logo} alt="" className="logo" />
        <FaBars className="nav-toggle" onClick={toggle} />
        </div>
      <div className="links-container" ref={refContainer} >
      <div className="links">
        {links.map((item) => {
          const { id, text, url } = item;
          return <a href={url} key={id}>{text}</a>
      })}
        </div>
        </div>
      <div className="social-icons">
        {
          social.map((item) => {
             const { id,icon, url } = item;
                return <a href={url} key={id}>{icon}</a>
          })
      }
        </div>
        </div>
   </nav>
}
 
export default Navbar
