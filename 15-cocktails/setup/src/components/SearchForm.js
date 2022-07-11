import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchterm } = useGlobalContext();
  return (
    <div>
      <div >
        <div className="search-form">
          <form className="form-control">
            <label htmlFor="">Search Your Favorite Cocktail</label>
            <input type="text"
              onChange={(e)=>setSearchterm(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
