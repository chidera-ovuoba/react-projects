import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  cart:cartItems,
  cartBag: 0,
  total:0,
}
const AppProvider = ({ children }) => {
 const [state, dispatch] = useReducer(reducer, initialState);

  const increment = (id) => {
    dispatch({ type:'INCREMENT', payload: id });
  }
   const decrement = (id) => {
    dispatch({ type:'DECREMENT', payload: id });
  }
  const clear = () => {
    dispatch({ type:'CLEAR_ALL' });
  }
   const remove = (id) => {
    dispatch({ type:'REMOVE_ITEM', payload: id });
  }
  useEffect(() => {
    dispatch({type:'GET_TOTAL'})
},[state.cart])

  return (
    <AppContext.Provider
      value={{
      ...state,
        increment,
        decrement,
        clear,
        remove
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
