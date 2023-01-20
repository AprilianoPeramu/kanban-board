import React from 'react'
import Navbar from './Navbar'
import { BsThreeDots, BsFillCheckCircleFill } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Kanban = () => {

    return (
        <div>
            <Navbar />
            <div className="row justify-content-start">
                <div className="col-md-3 ">
                    <div className="card ms-2">
                        <div className="card-titles">
                            <p>Group Task 1</p>
                        </div>
                        <div className="subtitle">
                            <p>January - March</p>
                        </div>
                        <div className="cardbody">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quam enim minima accusantium harum reiciendis?</p>
                            <hr className='lines' />
                            <div className="bar d-flex ">
                                <ProgressBar now={100} variant="success" className='progress mt-2' />
                                <BsFillCheckCircleFill className='icon1 ms-2 mt-2' />
                                <button className='icon ms-5 mb-3'><BsThreeDots /></button>
                            </div>
                        </div>
                        <div className="cardbody mt-2 mb-2">
                            <p className='mt-2 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quam enim minima accusantium harum reiciendis?</p>
                            <hr className='lines' />
                            <div className="bar d-flex ">
                                <ProgressBar now={30} className='progress mt-2' /><span className='persen'> 30 %</span>
                                {/* <BsFillCheckCircleFill className='icon1 ms-2 mt-2'/> */}
                                <button className='icon ms-5 mb-3'><BsThreeDots /></button>
                            </div>
                        </div>
                        <button className='icons mt-2 mb-2'><CiCirclePlus className='fs-5' /><span> New Task</span></button>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card1">
                        <div className="card-titles1">
                            <p>Group Task 2</p>
                        </div>
                        <div className="subtitle">
                            <p>April - June</p>
                        </div>
                        <div className="cardbody">
                            <p className='mt-2 mb-2'>No Task</p>
                        </div>
                        <button className='icons mt-2 mb-2'><CiCirclePlus className='fs-5' /><span> New Task</span></button>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card2">
                        <div className="card-titles2">
                            <p>Group Task 3</p>
                        </div>
                        <div className="subtitle">
                            <p>July - September</p>
                        </div>
                        <div className="cardbody">
                            <p className='mt-2 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quam enim minima accusantium harum reiciendis?</p>
                            <hr className='lines' />
                            <div className="bar d-flex ">
                                <ProgressBar now={60} className='progress mt-2' /><span className='persen'> 60 %</span>
                                {/* <BsFillCheckCircleFill className='icon1 ms-2 mt-2'/> */}
                                <button className='icon ms-5 mb-3'><BsThreeDots /></button>
                            </div>
                        </div>
                        <button className='icons mt-2 mb-2'><CiCirclePlus className='fs-5' /><span> New Task</span></button>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card3 me-2">
                        <div className="card-titles3">
                            <p>Group Task 4</p>
                        </div>
                        <div className="subtitle">
                            <p>October - December</p>
                        </div>
                        <div className="cardbody">
                            <p className='mt-2 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quam enim minima accusantium harum reiciendis?</p>
                            <hr className='lines' />
                            <div className="bar d-flex ">
                                <ProgressBar now={20} className='progress mt-2' /><span className='persen'> 20 %</span>
                                {/* <BsFillCheckCircleFill className='icon1 ms-2 mt-2'/> */}
                                <button className='icon ms-5 mb-3'><BsThreeDots /></button>
                            </div>
                        </div>
                        <button className='icons mt-2 mb-2'><CiCirclePlus className='fs-5' /><span> New Task</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kanban