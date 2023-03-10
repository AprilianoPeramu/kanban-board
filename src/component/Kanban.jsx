import { useState, useEffect } from 'react';
import Navbar from './Navbar'
import { BsThreeDots, BsFillCheckCircleFill } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';
import Modal from './Modal';
import List from './List';

const Kanban = () => {
    const [getData, setGetData] = useState([]);
    const [getList, setGetList] = useState([]);


    useEffect(() => {
        axios
            .get('https://todo-api-18-140-52-65.rakamin.com/todos', {
                headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5LCJleHAiOjE2ODMwMDIxOTh9.v_Nc9mte3oUNisEF2absZyrcuNR8MbLtQEaVtFydwto' },
            })
            .then(({ data }) => {
                setGetData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        axios
            .get('https://todo-api-18-140-52-65.rakamin.com/todos/2/items', {
                headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5LCJleHAiOjE2ODMwMDIxOTh9.v_Nc9mte3oUNisEF2absZyrcuNR8MbLtQEaVtFydwto' },
            })
            .then(({ data }) => {
                setGetList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    console.log(getData, getList)

    return (
        <>
            <Navbar />
            <div className="container-fluid mb-4">
                <div className="row justify-content-center">
                    {getData?.map((todos) => (
                        <div className="col-md-3 " key={todos?.id} >
                            <div className="card">
                                <div className="card-titles">
                                    <p>{todos?.title}</p>
                                </div>
                                <div className="subtitle">
                                    <p>{todos?.description}</p>
                                </div>
                                <div className="cardbody">
                                    {getList.map((todos) => {
                                   return <p key={todos.id}>{todos.name}</p>
                                })}
                                    <hr className='lines' />
                                    <div className="bar d-flex ">
                                        <ProgressBar now={100} variant="warna-bar" className='progress mt-2' />
                                        <BsFillCheckCircleFill className='icon1 ms-2 mt-2' />
                                        <button className='iconcentang mb-3' ><a><BsThreeDots /></a></button>
                                    </div>
                                </div>
                                <div className="cardbody mt-2 mb-2">
                                {getList.map((todos) => {
                                   return <p key={todos.id}>{todos.name}</p>
                                })}
                                    <hr className='lines' />
                                    <div className="bar d-flex ">
                                        <ProgressBar now={30} variant="warna-bar1" className='progress mt-2' /><span className='persen'> 30 %</span>
                                        {/* <BsFillCheckCircleFill className='icon1 ms-2 mt-2'/> */}
                                        <button className='icon'><BsThreeDots /></button>
                                    </div>
                                </div>
                                <button className='icons mt-2 mb-2'><span><a data-bs-toggle="modal" data-bs-target="#exampleModal1"><CiCirclePlus className='iconss' /> New Task</a></span></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal></Modal>
            <List></List>
        </>

    )
}

export default Kanban