import React from 'react'
import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img src="https://images.unsplash.com/photo-1601047656464-f4e7621681bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="life" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet </span>
            <hr />
            <span className="postDate">1 hour ago</span>
            
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quasi sed nostrum soluta quia voluptates explicabo quae exercitationem provident reiciendis facere recusandae, animi facilis consectetur accusamus dolores. Ad, cum vitae veniam, beatae natus perspiciatis voluptatum perferendis, deserunt molestiae dolorum excepturi.</p>
        </div>
    )
}
