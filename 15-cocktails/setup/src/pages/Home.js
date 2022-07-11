import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <div>
      <div className="search">
       <SearchForm />
      </div>
   
      <CocktailList/>
    </div>
  )
}

export default Home
