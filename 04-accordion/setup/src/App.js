import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [state, setState] = useState(data);
 
  return <>
    <main>
      <div className="container">
        <h3>questions and answers about</h3>
        <div>
          {state.map((item)=> {
            return <SingleQuestion {...item} key={ item.id} />
        })}
        </div>
      </div>
    </main>
  
  </>;
} 

export default App;
