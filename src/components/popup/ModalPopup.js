import React from 'react'
import ReactModal from 'react-modal';

function ModalPopup({handleCloseModal,openModal,name,setname,email,setemail,handleSubmit}) {
    return (
        <>
        <ReactModal 
           isOpen={openModal}
           contentLabel="Minimal Modal Example"
        >
            <button type="button" className="btn btn-danger close-btn" onClick={handleCloseModal}>x</button>
          <form role="form" onSubmit={handleSubmit} method="post" id="reused_form">
        <p>
            Send us your contact information.
        </p>

            <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" className="form-control" id="name" value={name} onChange={e=>setname(e.target.value)}  required maxlength="50" />
            </div>
            <div className="form-group">
                <label for="email">
                    Email:</label>
                <input type="email" className="form-control"
                id="email" name="email" required maxlength="50" value={email} onChange={e=>setemail(e.target.value)} />
            </div> 
            <button type="submit" className="btn btn-success">Submit</button> 
           </form> 
        </ReactModal>
        </>
    )
}

export default ModalPopup
