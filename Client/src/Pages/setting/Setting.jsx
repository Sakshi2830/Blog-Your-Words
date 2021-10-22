import React from 'react'
import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Setting() {
    return (
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update your Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form className="settingForm">
                    <label >Profile Picture</label>
                    <div className="settingPP">
                    <img className="settingImage" src="https://cdn.sharechat.com/profiledp_8c2b507f-1c73-400d-ba99-bcede29a42ee-90a7e13d-59fd-4e82-95dc-98dcc9a0577b_cmprsd_40.jpg" alt="profile" />
                    <label htmlFor="fileInput">
                    <i className=" settingPPIcon fas fa-user-tie"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label >UserName</label>
                    <input type="text" placeholder="username"/>
                    <label >Email</label>
                    <input type="email" placeholder="username@gmail.com"/>
                    <label >Password</label>
                    <input type="password"/>
                    <button className="settingUpdate">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
