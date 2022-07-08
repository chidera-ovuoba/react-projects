import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [state, setState] = useState('#f15025');
  const [state1, setState1] = useState(false);
  const [colorList,setColorList] = useState(new Values('#f15025').all())
  // console.log('heloo')
  function handleClick(e) { 
    e.preventDefault();
    try {
      let values = new Values(state).all();
      setColorList(values);
    }catch(error){
      setState1(true)
     console.log(error)  
    }
  }
  console.log(colorList)
  return <>
    <div className="container">
      <h3>Color Generator</h3>
      <input type="text" placeholder='#f15025' value={state} onChange={(e) => setState(e.target.value)}
      className={`${state1 ? 'error':''}`}
      />
      <button type='submit' className="btn" onClick={handleClick}>Submit</button>
    </div>
    <section className="colors">
      {
        colorList.map((item,i) => {
          return <SingleColor {...item} item={item} key={i} />
        })
     }
    </section>
    

  </>
} 

export default App
