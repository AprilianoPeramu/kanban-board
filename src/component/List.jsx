import React, { useState } from 'react'
import axios from 'axios'

export default function List() {

    const [task, setTask] = useState("");
    const [progress, setProgress] = useState("");

    const createTask = () => {

        const data = {
            task: task,
            progress: progress
        }
        axios
            .post('https://todo-api-18-140-52-65.rakamin.com/todos/1/items', {
                headers: { 
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5LCJleHAiOjE2ODI5OTgzMTB9.MTJPrdfEzZf7lmAhrUP0-9lvK7xIuMMCFth-u35EjNc' 
                },
                Body: data,
            })
            .then(({ data }) => {
                console.log('success')
            })
            .catch((err) => {
                console.log(err);
            });
    }

  return (
    <div>
        <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <form>
                            <div className="modal-header">
                            <h1 className="modal-title" id="exampleModalLabel">Create Task</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label title">Task Name</label>
                                <input 
                                    value={task}
                                    onChange={(e) => setTask(e.target.value)}
                                    type="text" 
                                    className="form-control" 
                                    id="recipient-name" 
                                    placeholder='Type your Task' 
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message-text" className="col-form-label title">Progress</label>
                                <input 
                                    value={progress}
                                    onChange={(e) => setProgress(e.target.value)}
                                    type="text" 
                                    className="form-control input-bar" 
                                    id="recipient-name" 
                                    placeholder=' 70%' 
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-cancel" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn butn-modal1" onClick={createTask} >Save Task</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
