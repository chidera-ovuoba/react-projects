import React, { useState, useContext } from 'react'
import sublinks from './data';

const appContext = React.createContext();

function AppProvider({ children }) {
    const [sidebar, setSidebar] = useState(false);
    const [page, setPage] = useState('');
    const [links, setLinks] = useState([]);
    const [mouse,setMouse] = useState(false)
    const [position, setPosition] = useState({});
    function onMouse(e) {
        const sublink = sublinks.filter((item) => item.page === e.target.textContent);
        const { page, links } = sublink[0];
        setMouse(true);
        setPage(page)
        setLinks(links);
        console.log(e.target);
        const location = e.target.getBoundingClientRect();
        setPosition(location);
    }

    function openSidebar() {
        setSidebar(true);
    }
      function closeSidebar() {
        setSidebar(false);
    }
    
    
    return <appContext.Provider
    value={{openSidebar,closeSidebar,page,setLinks,setPage,setPosition,links,position,onMouse,sidebar,mouse,setMouse}}
    >
    {children}
    </appContext.Provider>

}

export function useGlobalContext() {
    return useContext(appContext);
}

export default AppProvider