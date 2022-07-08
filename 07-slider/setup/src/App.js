import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [index, setIndex] = useState(0);
  function check(number) {
    if (number > data.length - 1) {
      return 0
    }
    if (number < 0) {
      return data.length - 1 
    }
    return number
  }
  function nextIndex() {
    setIndex((prev)=> check(prev + 1))
  }
    function prevIndex() {
    setIndex((prev)=> check(prev - 1))
  }
  useEffect(() => {
    setInterval(nextIndex, 5000);
},[])
  return <section className='section'>
    <div className="title">
     <h2> <span>/</span> reviews</h2>
    </div>
    <div className="section-center">
      {data.map((item, i)=>{
        const {id,image,name,quote,title}= item
        return <article key={id} className={`${check(index)=== i ? 'activeSlide': ''} ${i===check(index - 1) ? 'lastSlide' :''} ${i===check(index + 1) ? 'nextSlide' :''} `}>
         
          <img src={image} alt="" className="person-img" />
         
          
            <h4>{name}</h4>
            <div className="title1">
            {title}
            </div>
          
          <div className="text">
          {quote}
          </div>
          <div className="icon">
          <FaQuoteRight/>
          </div>
        </article>
      })}
      <div className="prev" onClick={prevIndex}>
      <FiChevronLeft/>
      </div>
      <div className="next" onClick={nextIndex}>
      <FiChevronRight/>
      </div>
    </div>
  </section>;
}

export default App; 
