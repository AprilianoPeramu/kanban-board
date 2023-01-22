import React, { useState } from 'react'
import axios from 'axios';

export default function Modal() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    
    
    const createGroup = () => {
        
        const data = {
            title: title,
            description: description
        }
        axios
            .post('https://todo-api-18-140-52-65.rakamin.com/todos', {
                headers: { 
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5LCJleHAiOjE2ODI5NTU5MjJ9.VFydL0587a0hTIVuGh5dwbqToxfECV_8MLO39zsfULk' 
                },
                body: data,
            })
            .then(({ data }) => {
                console.log('success')
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <h1 className="modal-title mb-3" id="exampleModalLabel">Add New Group</h1>
                                <label htmlFor="recipient-name" className="col-form-label title">Title</label>
                                <input 
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    type="text" 
                                    className="form-control" 
                                    id="recipient-name"
                                    placeholder='Type your Title'
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message-text" className="col-form-label title">Description</label>
                                <textarea
                                    className="form-control" 
                                    id="message-text" 
                                    value={description} 
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder='Type your Description'
                                >
                                </textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-cancel" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn butn-modal" onClick={createGroup}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
