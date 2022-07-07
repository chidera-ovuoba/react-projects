import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, image, job, name, text } = people[index]
  function checkNumber(number) {
  if (number < 0)return people.length - 1
    if (number > people.length - 1) return 0
    return number;
  }
  const prevPerson = () => {
    setIndex((prev)=>checkNumber(prev - 1))
  }
   const nextPerson = () => {
    setIndex((prev)=>checkNumber(prev + 1))
  }
  const randomPerson = () => {
    let random = Math.floor(Math.random() * people.length)
    if (index === random) {
      random++;
    }
    setIndex(checkNumber(random))
  }
  return <>
    <div className="review" key={id}>
      <div className="img-container">
        <img src={image} alt="" className="person-img" />
        <div className="quote-icon">
        <FaQuoteRight/>
        </div>
        </div>
      <div className="author">{name}</div>
      <div className="job">{job}</div>
      <p className="info">
      {text}
      </p>
      <FaChevronLeft className='prev-btn' onClick={prevPerson} />
      <FaChevronRight className='next-btn' onClick={nextPerson} />
      <div>
      <button className="random-btn"
      onClick={randomPerson}
      >Suprise me</button>
    </div>
    </div>
  
  
  </>;
};
 
export default Review;
