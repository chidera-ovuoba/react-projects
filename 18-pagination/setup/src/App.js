import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import paginate from './utils'
import Follower from './Follower'
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [data1, setData1] = useState([])
  

    const { data, loading } = useFetch();
    

  const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
  function checkNumber(number) {
    if (number > 10) {
      return 1;
    }
    if (number <= 0) {
      return 10;
    }
    return number
  }
  useEffect(() => {
   setData1( paginate(data, currentPage, postsPerPage))
  },[currentPage,data])

  if (loading) {
    return <>
      <h2 className="section-title">Loading....</h2>
      <div className="underline"></div>
    </>
  }
  
  return <>
    <h2 className="section-title">Pagination</h2>
    <div className="underline"></div>

    <div className="followers">
      <div className="container">
        {data1.map((item) => {
          return <Follower {...item} key={item.id} />  
        })}
      </div>
      <div className="btn-container">
        <button className="prev-btn" onClick={()=>setCurrentPage((prev)=>checkNumber(prev - 1))}>Prev</button>
        {arrOfNumbers.map((item,i) => {
          return <button key={i} className={`page-btn ${currentPage === item ? 'active-btn':''}`} onClick={()=>setCurrentPage(item)}>
          {item}
          </button>
        })}
         <button className="next-btn" onClick={()=>setCurrentPage((prev)=>checkNumber(prev + 1))}>Next</button>
      </div>
    </div>
  
  </>
}

export default App
