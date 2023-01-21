import { useState, useEffect } from 'react';
import Navbar from './Navbar'
import { BsThreeDots, BsFillCheckCircleFill } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';
import Modal from './Modal';


const Kanban = () => {

    const [getData, setGetData] = useState([]);

    useEffect(() => {
        axios
            .get('https://todo-api-18-140-52-65.rakamin.com/todos')
            .then(({ data }) => {
                setGetData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <DataTodo />
        </div>
    )
}

function DataTodo() {
    return (
        <>
            <div className="container-fluid mb-4">
                <div className="row justify-content-center">
                    <div className="col-md-3 ">
                        <div className="card">
                            <div className="card-titles">
                                <p>Group Task 1</p>
                            </div>
                            <div className="subtitle">
                                <p>January - March</p>
                            </div>
                            <div className="cardbody">
                                <p>Re-desinged the zero-g doggie bags. No more spills!</p>
                                <hr className='lines' />
                                <div className="bar d-flex ">
                                    <ProgressBar now={100} variant="warna-bar" className='progress mt-2' />
                                    <BsFillCheckCircleFill className='icon1 ms-2 mt-2' />
                                    <button className='iconcentang mb-3'><a data-bs-toggle="modal" data-bs-target="#exampleModal"><BsThreeDots /></a></button>
                                </div>
                            </div>
                            <div className="cardbody mt-2 mb-2">
                                <p className='mt-2 mb-2'>Bundle interplanetary analystic for improved transmission</p>
                                <hr className='lines' />
                                <div className="bar d-flex ">
                                    <ProgressBar now={30} variant="warna-bar1" className='progress mt-2' /><span className='persen'> 30 %</span>
                                    {/* <BsFillCheckCircleFill className='icon1 ms-2 mt-2'/> */}
                                    <button className='icon'><BsThreeDots /></button>
                                </div>
                            </div>
                            <button className='icons'><CiCirclePlus className='iconss' /><span><a data-bs-toggle="modal" data-bs-target="#exampleModal"> New Task</a></span></button>
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
                            <button className='icons mt-2 mb-2'><CiCirclePlus className='iconss' /><span> New Task</span></button>
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
                                <p className='mt-2 mb-2'>Data Migration: Performance & Culture End Game</p>
                                <hr className='lines' />
                                <div className="bar d-flex ">
                                    <ProgressBar now={60} variant="warna-bar1" className='progress mt-2' /><span className='persen'> 60 %</span>
                                    {/* <BsFillCheckCircleFill className='icon1 ms-2 mt-2'/> */}
                                    <button className='icon mb-3'><a data-bs-toggle="modal" data-bs-target="#exampleModal"><BsThreeDots /></a></button>
                                </div>
                            </div>
                            <button className='icons mt-2 mb-2'><CiCirclePlus className='iconss' /><span> New Task</span></button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card3">
                            <div className="card-titles3">
                                <p>Group Task 4</p>
                            </div>
                            <div className="subtitle">
                                <p>October - December</p>
                            </div>
                            <div className="cardbody">
                                <p className='mt-2 mb-2'>Bundle interplanetary analystic for improved transmission</p>
                                <hr className='lines' />
                                <div className="bar d-flex ">
                                    <ProgressBar now={20} variant="warna-bar1" className='progress mt-2' /><span className='persen'> 20 %</span>
                                    {/* <BsFillCheckCircleFill className='icon1 ms-2 mt-2'/> */}
                                    <button className='icon mb-3'><a data-bs-toggle="modal" data-bs-target="#exampleModal"><BsThreeDots /></a></button>
                                </div>
                            </div>
                            <button className='icons mt-2 mb-2'><CiCirclePlus className='iconss' /><span> New Task</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal></Modal>
        </>

    )
}

export default Kanban