import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/Single post/SinglePost'
import "./single.css"

export default function Single() {
    return (
        <div className="single">
            <SinglePost/>
          <Sidebar/>
        </div>
    )
}
