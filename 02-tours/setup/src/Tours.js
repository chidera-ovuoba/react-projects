import React from 'react';
import Tour from './Tour';
const Tours = ({ data,setData}) => {
  const removeTour= (id) => {
   const newData = data.filter((item) => item.id !== id);
    setData(newData);
  }

  return <>
    {data.map((item,i) => <Tour {...item} removeTour={removeTour} key={i}/>)}
    
  </>;
};

export default Tours; 
