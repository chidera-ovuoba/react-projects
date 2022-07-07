import React from 'react';
import Review from './Review';
function App() {
  return <>
    <main>
      <div className="title">
        <h2>Our reviews</h2>
        <div className="underline"></div>
      </div>
      <div className="container">
      <Review/>
      </div>
    </main>
  </>;
}
 
export default App;
