import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [isClicked, setIsClicked] = useState(false);
  return <>
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={()=>setIsClicked((prev)=>!prev)}>{isClicked ? <AiOutlineMinus /> :<AiOutlinePlus/>}</button>  
      </header>
      <p>{isClicked ? info :''}</p>    
 </div>
  
  </>;
};

export default Question;
