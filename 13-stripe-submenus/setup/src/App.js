import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import { useGlobalContext } from './context';
function App() {
   const {setMouse } = useGlobalContext();
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      setMouse(false)
    }
  };
  return (
    <div onMouseOver={handleSubmenu}>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu/>
    </div>
  )
}

export default App
