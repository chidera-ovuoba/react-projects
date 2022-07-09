import React, { useEffect } from 'react'

const Alert = ({isShow,setIsShow,activeMessage,isAlert,list}) => {
   useEffect(() => {
     const timeout =setTimeout(() => setIsShow(false), 3000);     
      
    return () => {
      clearTimeout(timeout);
      };
    }, [setIsShow,isShow,list])
  return <>
    
    {
      isShow && <div className={`alert ${isAlert ? 'alert-success':'alert-danger'}`}>
      {activeMessage}
      </div>
  }
    
  </>
}

export default Alert
 