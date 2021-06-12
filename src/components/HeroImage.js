import React from 'react'

function HeroImage({handleOpenModal}) {
    return (
        <div className="hero-image">
            <div className="hero-text">
                <h1>I am Fahad Shinwari</h1>
                <p>Click Below to Open Popup</p>
                <button  type="button" className="btn btn-primary" onClick={handleOpenModal}>Open Popup</button>
            </div>
        </div> 
    )
}

export default HeroImage
