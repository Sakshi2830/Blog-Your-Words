import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <form  className="loginForm">
                <span className="loginTitle">Login</span>
            <label >Email</label>
            <input type="text" className="loginInput" placeholder="Enter your Email" />
            <label >Password</label>
            <input type="password" placeholder="Enter your Password" className="loginInput" />
            <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link  className="link" to="/register">Register</Link>
            </button>
        </div>
    )
}
