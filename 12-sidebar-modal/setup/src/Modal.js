import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
const Modal = () => {
  const { closeModal,modal } = useGlobalContext();
  return <>
    
    <div  className={` modal-overlay ${modal ? 'show-modal':''}`}>
      <div className="modal-container">
        <button className="close-modal-btn"
        onClick={closeModal}
        ><FaTimes /></button>
       <h3>Modal content</h3>
      </div>
    </div>
  </>
} 

export default Modal
 