import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id,name,image,glass,info}) => {
  return (
    <div>
      <div className="cocktail">
        <img src={image} alt="" />
        <div className="cocktail-footer">
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{info}</p>
          <Link className="btn btn-primary" to={`/singleCocktail/${id}`}>
          Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cocktail
