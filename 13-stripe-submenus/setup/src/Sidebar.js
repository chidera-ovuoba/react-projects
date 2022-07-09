import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context';
const Sidebar = () => {
  const { closeSidebar,sidebar} = useGlobalContext();
  return <>
    
    <div className={`sidebar-wrapper ${sidebar ? 'show':''}`}>
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes/>
        </button>
        <article>
          {sublinks.map((item,i) => {
            const {page,links} = item
            return <div key={i}>
             {page}
              <div className="sidebar-sublinks">
                {links.map((item, i) => {
                  const { label, icon, url } = item;
                  return <a href={url}>{icon}{label}</a>
               })}
              </div>
              </div>
        })}
        </article>
      </div>
    </div>
  </>
}

export default Sidebar
