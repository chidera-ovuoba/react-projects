import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({item,Edit,DeleteItem}) => {
  return <>
    <div className="grocery-item">
      <div className="title">
      {item}
      </div>
      <div>
        <button className="edit-btn" onClick={() => Edit(item)}><FaEdit /></button>
         <button className="delete-btn" onClick={()=>DeleteItem(item)}><FaTrash/></button>
      </div>
    </div>
  </>
}

export default List
 