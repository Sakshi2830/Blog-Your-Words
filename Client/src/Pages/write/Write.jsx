import React from 'react'
import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img src="https://wallpaperaccess.com/full/284500.jpg" alt="life" className="writeImg" />
            <form  className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placeholder="Tell your Story....."
                        type="text"
                        className="writeInput writeText"
                    ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
