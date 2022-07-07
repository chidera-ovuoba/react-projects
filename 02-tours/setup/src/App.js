import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(url);
      const resData = await response.json();
      setData(resData);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  if (isLoading) {
    return <Loading/>
  }
 
  return <>
      
      <main>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
      <Tours data={data} setData={setData} />
      </main>
  
  </>
}
 
export default App
