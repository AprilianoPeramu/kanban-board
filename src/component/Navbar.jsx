import React from 'react'
import {BiPlus} from "react-icons/bi";
import Modal from './Modal';

const Navbar = () => {
  return (
    <div>
        <div className='d-flex align-items-center mt-1'>
        <h5 className='ms-4 mb-2'>Product Roadmap</h5>
        <button className='butn ms-2 justify-content-start'><BiPlus className='nav-icon'/><a data-bs-toggle="modal" data-bs-target="#exampleModal">Add New Group</a></button>
        </div>
        <hr className='navline'/>
        <Modal></Modal>
    </div>
  )
}

export default Navbar