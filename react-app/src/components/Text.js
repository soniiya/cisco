import React from 'react'
import './Text.css'

function Text() {
  return (
    <div>
    <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Some random information</h2>

    <div className="box_container">
        <div className="box_with_text">
            <div className="boxes"></div>
            <span>this is some subtext under an illustration or image</span>
        </div>
        <div className="box_with_text">
            <div className="boxes"></div>
            <span>this is some subtext under an illustration or image</span>
        </div>
        <div className="box_with_text">
            <div className="boxes"></div>
            <span>this is some subtext under an illustration or image</span>
        </div>
        <div className="box_with_text">
            <div className="boxes"></div>
            <span>this is some subtext under an illustration or image</span>
        </div>
    </div>
</div>

  )
}

export default Text