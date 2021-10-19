import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarItems">
               <span className="sidebarTitle">ABOUT</span>
               <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="person" />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ex, nisi nesciunt repellendus neque distinctio laudantium dolor laboriosam</p>
           </div>
           <div className="sidebarItems">
               <span className="sidebarTitle"> CATEGORIES </span>
               <ul className="sidebarList">
                   <li className="sidebarListItems">LIFE</li>
                   <li className="sidebarListItems">MUSIC</li>
                   <li className="sidebarListItems">SPORTS</li>
                   <li className="sidebarListItems">FASHION</li>
                   <li className="sidebarListItems">TECHNOLOGY</li>
                   <li className="sidebarListItems">CINEMA</li>
               </ul>
           </div>
            <div className="sidebarItems">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
            </div>
        </div>
    )
}
