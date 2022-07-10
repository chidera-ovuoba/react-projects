import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { onMouse, openSidebar,setMouse} = useGlobalContext();
  
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      setMouse(false);
    }
  }
  return <>
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
    <div className="nav-header">
        <img src={logo} alt="" className='nav-logo'/>
        <button className="btn toggle-btn" onClick={openSidebar}><FaBars /></button>
        </div>
        <ul className="nav-links">
          <li onMouseOver={onMouse}className='link-btn'>products</li>
          <li onMouseOver={onMouse}className='link-btn'>developers</li>
          <li onMouseOver={onMouse}className='link-btn'>company</li>
        </ul>
        <button className="signin-btn btn">Sign in</button>
        
        </div>
    </nav>
  </>
}

export default Navbar
 