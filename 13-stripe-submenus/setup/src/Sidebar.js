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
        <article className='sidebar-links'>
          {sublinks.map((item,i) => {
            const {page,links} = item
            return <div key={i}>
             <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map((item, i) => {
                  const { label, icon, url } = item;
                  return <a href={url} key={i}>{icon}{label}</a>
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
