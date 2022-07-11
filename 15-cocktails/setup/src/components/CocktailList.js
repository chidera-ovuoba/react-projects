import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {loading,cocktails}= useGlobalContext()
  if (loading) {
    return <Loading/>
  }
  return (
    <div>
      <div className="section">
        <div className="section-title">
        <h2>Cocktails</h2>
        </div>
        <div className="cocktails-center">
          {
            cocktails.map((item,i) => {
              return <Cocktail {...item} key={i} />
            })
        }
        </div>
      </div>
    </div>
  )
}

export default CocktailList
