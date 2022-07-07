import React from 'react';

const Categories = ({categories,filterMenu}) => {
  return <>
    {categories.map((category, i) => {
      return <button
         key={i}
        className='filter-btn'
        onClick= {()=>filterMenu(category)}
      >
      {category}
      </button>
    })}
  </>;
};

export default Categories;
 