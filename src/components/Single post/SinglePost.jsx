import React from 'react'
import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
        <div className="singlePostEdit">
        <i className="singlePostIcon fas fa-edit"></i>
        <i className="singlePostIcon fas fa-trash"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuther">Author: <b>Sakshi</b> </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere incidunt sunt, libero hic quos minus! Molestiae enim corrupti quasi repellendus aliquam voluptatibus minima, maxime ipsum deleniti! Excepturi minima, veniam porro alias maiores natus dolore incidunt ut, est magnam optio architecto ipsam voluptate nesciunt maxime fuga! Nostrum deleniti omnis repudiandae molestiae exercitationem illum doloremque ipsa vitae quibusdam illo adipisci, nemo sit hic sint est impedit porro totam ducimus necessitatibus aliquid iure? Officiis facilis non iusto doloremque officia omnis recusandae repellat sapiente, repudiandae quo esse eligendi magnam nobis ad sunt est! Quam vel eius expedita adipisci error cum alias! Delectus omnis architecto temporibus sequi provident iure quos voluptas nesciunt illum, corporis hic nam adipisci, repellendus quae quas cum mollitia labore ea vel enim eaque laudantium quod? Tempore, illum omnis! Odit, vel minus? Iusto voluptas vero, molestias saepe animi porro dolorum totam. Sit deleniti omnis quia, impedit magni provident libero enim eligendi placeat Delectus omnis architecto temporibus sequi provident iure quos voluptas nesciunt illum, corporis hic nam adipisci, repellendus quae quas cum mollitia labore ea vel enim eaque laudantium quod? Tempore, illum omnis! Odit, vel minus? Iusto voluptas vero, molestias saepe animi porro dolorum totam. Sit deleniti omnis quia, impedit magni provident libero enim eligendi placeat.</p>
        </div>
        </div>
    )
}
