import React from 'react';

const List = ({image,name,id,age}) => {
  return (
    <>
      <div className="person" key={id}>
        <img src={image} alt="" />
        <h4>{name}</h4>
        <p>{age}years</p>
      </div>     
    </>
  );
};

export default List;
