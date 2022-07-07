import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [state, setState] = useState(items);
  function filterMenu(category) {
    if (category === 'all') {
      setState(items);
    } else {
      let newMenu = items.filter((item) => item.category === category)
    setState(newMenu);
    }
  }
   const categories = ['all','breakfast','lunch','shakes']
  return <>
    
    <div className="menu">
      <div className="title">
        <h3>our menu</h3>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        <Categories categories={categories} filterMenu={filterMenu} />
      </div>
      <div className="section-center">
        {state.map((item) => {
         return <Menu{...item} key={item.id} />
      })}
      </div>
    </div>
  
  </>;
}

export default App;
 