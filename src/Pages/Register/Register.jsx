import React from 'react'
import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <form  className="registerForm">
                <span className="registerTitle">Register</span>
            <label >Email</label>
            <input type="text" className="registerInput" placeholder="Enter your Email" />
            <label >Password</label>
            <input type="password" placeholder="Enter your Password" className="registerInput" />
            <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
        </div>
    )
}
