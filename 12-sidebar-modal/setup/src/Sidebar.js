import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context';
const Sidebar = () => {
  const { sidebar, closeSidebar } = useGlobalContext();
  return <>
    <aside className={`sidebar ${sidebar ? 'show-sidebar':''}`}>
    <div className="sidebar-header">
      <img src={logo} alt="" className="logo" />
        <button className="close-btn"
        onClick={closeSidebar}
        ><FaTimes /></button>
    </div>
    <ul className="links">
      {links.map((item) => {
        const { id, url, text, icon } = item;
       return <li key={id}><a href={url}>{icon}{text}</a></li> 
    })}
      </ul>
      <div className="social-icons">
        {social.map((item) => {
          const { id, url, icon } = item;
          return <a href={url} key={id}>{icon}</a>
      })}
      </div>
</aside>
  </>
}

export default Sidebar
 