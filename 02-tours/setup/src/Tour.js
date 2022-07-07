import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price,removeTour}) => {
  const [isOpen, setIsOpen] = useState(true);
  const sub = info.toString().substring(0, 200);
  console.log(id);
  return <>
    <div className="single-tour">
      <img src={image} alt="" />
      <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">$
        {price}
        </h4>
      </div>
      
        <p>{isOpen ? sub : info}
         <button onClick={()=>setIsOpen((prev)=>!prev)}>{isOpen ? 'Read more...':'Read less...'}</button>
        </p>
       
        <button className="delete-btn" onClick={()=>removeTour(id)}>
        Not Intereseted
        </button>
      </footer>
    </div>
  </>;
};

export default Tour;
 