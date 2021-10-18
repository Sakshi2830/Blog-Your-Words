import React from 'react';
import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitlessm">React & Nodejs</span>
                <span className="headerTitleslg">Blogs</span>
            </div>
            <img
            className="headerImg"
            src="https://wallpaperaccess.com/full/1393334.jpg" alt="blog-img" />
        </div>
    )
}
