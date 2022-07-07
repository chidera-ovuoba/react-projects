import React from 'react';

const Menu = ({title,price,img,desc}) => {
  return <>
    <div className="menu-item">
      
      <img src={img} alt="" className="photo" />
      
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className="price">${price}</h4>
        </header>
        <div className="item-text">
        {desc}
        </div>
      </div>
    </div>
  </>;
};

export default Menu;
 