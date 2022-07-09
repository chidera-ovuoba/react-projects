import React, { useState } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [list, setList] = useState([]);
  const [grocery, setGrocery] = useState('');
  const [activeMessage, setActiveMessage] = useState('');
  const [isAlert, setIsAlert] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsShow(true); 
    // console.log(e.target)
    if (e.target.textContent === 'Submit') {
     
      if (grocery) {
        setIsShow(true);
        setGrocery('')
        setActiveMessage('Item Added to the List');
        setIsAlert(true);
        setList((prev) => [...prev,grocery]);
      
      } else {
         setIsShow(true);
        setActiveMessage('Please Enter A Value');
        setIsAlert(false);
        return
      }
    }
    if (e.target.textContent === 'Edit') {
        setGrocery('')
     
      list[index] = grocery;  
      setGrocery('');
       setIsShow(true);
      setActiveMessage('value Changed');
      setIsAlert(true);
      setIsEdit(false);
    }
  }
  const clearAll = () => {
     setIsShow(true);
    setIsAlert(false);
    setActiveMessage('Empty List');
    setList([])
  }
  function Edit(grocery) {
    setIsEdit(true);
    setIndex(list.findIndex((item) => item === grocery));
    setGrocery(grocery);
    }
  function DeleteItem(grocery) {
     setIsShow(true);
    setIsAlert(false);
    setActiveMessage('item removed from list');
    const newList = list.filter((item) => item !== grocery);
    setList(newList);
  }
  return <>
    <div className="section-center section">
      <div className="alert">
        <Alert
          list={list}
          isShow={isShow}
          isAlert={isAlert}
          setIsShow={setIsShow}
          activeMessage ={activeMessage}
        />
      </div>
      <div className="grocery-form">
        <h3>grocery bud</h3>
        <form className="form-control">
          <input type="text"
            className="grocery"
            placeholder='eg.egg'
            value={grocery}
            onChange={(e)=>setGrocery(e.target.value)}
          />
          <button type='submit' className="submit-btn" onClick={handleSubmit}>{isEdit ? 'Edit':'Submit'}</button>
          </form>
          <div className="grocery-container">
            {list.map((item,i) => {
             return <List item={item} key={i} Edit={Edit} DeleteItem={DeleteItem} />
          })}
          </div>
       { list.length > 0 && <button className='clear-btn' onClick={clearAll}>clear all</button>}
      </div>
    </div>
  </>
}

export default App
 