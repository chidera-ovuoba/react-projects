import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [state, setState] = useState('# markdown Preview');
  return <>
    <div className="markdown">
      <textarea className="input"
        type='text'
        value={state}
        onChange = {(e)=>setState(e.target.value)}
      ></textarea>
      <div className="result"><ReactMarkdown>{state}</ReactMarkdown></div>
    </div>
  
  
  </>
}

export default App 
