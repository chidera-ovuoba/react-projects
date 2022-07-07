import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [state, setState] = useState(data);
  return <>
    <main className="section">
      <div className="container">
        <h3>{state.length} birthdays today</h3>
        <List {...state} />
        <button onClick={()=>setState([])}>clear All</button>
      </div>
    </main>
  </>;
}

export default App;
