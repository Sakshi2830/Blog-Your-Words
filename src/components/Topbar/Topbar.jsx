import React from 'react'
import { Link } from 'react-router-dom'
import "./Topbar.css"

export default function TopBar() {
    const user = false
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
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/">ABOUT</Link></li>
                    <li className="topListItem">
                    <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/">
                        {user && "LOGOUT"}
                    </Link>
                    </li>
                </ul>
            </div>
            <div className="top_right">
                {user ? (
                <img className="topImage" src="https://cdn.sharechat.com/profiledp_8c2b507f-1c73-400d-ba99-bcede29a42ee-90a7e13d-59fd-4e82-95dc-98dcc9a0577b_cmprsd_40.jpg" alt="profile" />
    ) : (
        <ul className="topList">
            <li className="topListItem">
                <Link className="link" to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/register">REGISTER</Link>
            </li>
        </ul>

    )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
            
        </div>
    )
}
