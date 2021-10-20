import React from 'react'
import "./Topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="top_left">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>

            </div>
            <div className="top_center">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="top_right">
                <img className="topImage" src="https://cdn.sharechat.com/profiledp_8c2b507f-1c73-400d-ba99-bcede29a42ee-90a7e13d-59fd-4e82-95dc-98dcc9a0577b_cmprsd_40.jpg" alt="profile" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
            
        </div>
    )
}
