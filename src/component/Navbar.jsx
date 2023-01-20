import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='d-flex align-items-center mt-2 mb-2'>
        <h5 className='ms-4 mb-2'>Product Roadmap</h5>
        <button className='butn ms-2 justify-content-start'> + Add New Group</button>
        </div>
        <hr className='navline'/>
    </div>
  )
}

export default Navbar