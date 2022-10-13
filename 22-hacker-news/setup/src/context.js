import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'


const initialState = {
  loading: false  
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(initialState);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      console.log(data);
    }
    fetchData();
  },[])


  return <AppContext.Provider
    
  value={{}}
  
  >{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
