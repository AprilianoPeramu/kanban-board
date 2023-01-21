import React from 'react'

export default function Modal() {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <h1 className="modal-title mb-3" id="exampleModalLabel">Add New Group</h1>
                                <label for="recipient-name" class="col-form-label title">Title</label>
                                <input type="text" class="form-control" id="recipient-name"/>
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label title">Description</label>
                                <textarea class="form-control" id="message-text"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-cancel" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn butn-modal">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
