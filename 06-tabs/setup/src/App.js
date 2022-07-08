import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIsLoading(true);
    fetch(url).then((resp) => resp.json()).then((user) => {
      setData(user)
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <h1 className="loading">Loading...</h1>
  }
  // console.log(data[index]);
  const {company, title, dates, duties} = data[index]
  return <>
    <section className="section">
    <div className="title">
      <h2>Experience</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      <div className="btn-container">
        {data.map(({company},i) => {
          return <div className={`job-btn ${i===index ?'active-btn':''}`} key={i} onClick={()=>setIndex(i)}>
           {company}
          </div>
      })}
      </div>
      <div className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
      <p className="job-date">{dates}</p>
      
     
     {duties.map((item) => {
          return <div className="job-desc">
            <FaAngleDoubleRight className='job-icon' />
            <p>{item}</p>
          </div>  
     })}
      
        <button className="btn">more-info</button>
        </div>
    </div>
  </section>
  </>
}
 
export default App
