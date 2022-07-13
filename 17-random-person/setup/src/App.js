import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [defaultState, setDefaultState] = useState(true);
  const [random,setRandom] = useState({})
  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.results[0]) {
        const [phone, email, registered, picture, name, location, password] = [
          data.results[0].phone,
          data.results[0].email,
          data.results[0].dob.age,
          data.results[0].picture.medium,
          data.results[0].name,
          data.results[0].location.street,
          data.results[0].login.password
        ];
        const user = {
          phone, email, registered, picture, name, location, password
        }
        setUser(user);
        setLoading(false);
        setRandom({ title: 'name',value:[name.first,name.last ].join(' ')})
        setDefaultState(false)
      } else {
        setUser(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }
  const randomFunction = (title, value) => {
    setRandom({title,value});
  }

  const {
    phone, email, registered, picture, name, location, password
  } = user;
  
  useEffect(() => {
    fetchData();
   },[])
  
  
  
  return <>
    <div className="block bcg-black">
    </div>
    <div className="container">
      <img src={ defaultState ? defaultImage:picture} alt="" />
      <div className="user-title">my {defaultState ? 'name':random.title} is</div>
      <div className="user-value">{`${ defaultState ? 'ovuoba chidera':random.value}`}</div>
      <div className="values-list">
          <FaUser className='icon'  onMouseOver={()=>randomFunction('name',[name.first,name.last].join(' '))}/>
        <FaEnvelopeOpen className='icon'  onMouseOver={()=>randomFunction('email',email)}/>
        <FaCalendarTimes className='icon' onMouseOver={()=>randomFunction('age',registered)}/>
       <FaMap className='icon' onMouseOver={()=>randomFunction('street',[location.number,location.name].join(' '))}/>
       <FaPhone className='icon' onMouseOver={()=>randomFunction('phone',phone)}/>
       <FaLock className='icon' onMouseOver={()=>randomFunction('password',password)}/>
      </div>
      <div className="btn" onClick={fetchData}>{loading ? 'Loading..' : 'Random User'}</div>
    </div>
  </>
}

export default App 
