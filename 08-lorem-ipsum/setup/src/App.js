import React, { useState } from 'react';
import data from './data';
function App() {
  const [value, setValue] = useState(null);
  const [text, setText] = useState('');
  function check(number) {
    if (number > 8) {
      return 8;
    }
    if (number < 0) {
      return 0;
    }
    return number;
  }
  function generate() {
     setText(data.slice(0,check(value)).map((item) =><p>{item}</p>))
  }
  return (
    <>
      <section className="section-center">
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
        <form className="lorem-form">
          <label htmlFor="num">Paragraphs</label>
          <input type="number" id='num' value={value} onChange={((e) => setValue(e.target.value))} />
          <button className="btn" onClick={generate}>Generate</button>
        </form>
        <div className="result">
        {text}
        </div>
      </section>
    </>
    )
}

export default App; 
