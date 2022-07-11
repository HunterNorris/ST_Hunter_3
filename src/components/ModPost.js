import React, { useState } from "react";
import { editPost } from "../api";

const ModPost = ({ singlePost,setIsShown }) => {
  const [title, setTitle] = useState(singlePost.title);
  const [description, setDescription] = useState(singlePost.description);
  const [price, setPrice] = useState(singlePost.price);
  const [location, setLocation] = useState(singlePost.location);

//   const refreshPage =()=>{
//     return window.location.reload(false)
//   }

  const handleOnChange = (event) => {
    const changed = event.target.id;
    if (changed === "title") {
      setTitle(event.target.value);
      console.log(title, "title");
    }
    if (changed === "description") {
      setDescription(event.target.value);
      console.log(description, "description");
    }
    if (changed === "price") {
      setPrice(event.target.value);
      console.log(price, "i am the price");
    }
    if (changed === "location") {
      setLocation(event.target.value);
      console.log(location, "location");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    editPost(title, description, price, location, singlePost._id);
    const token = localStorage.getItem("token");
    setIsShown(false)
  };

  return (
    <div className="newPostBox">
      <form onSubmit={handleSubmit}>
        <div className="formProp">
          <label>Title: </label>
          <input
            // className="title"
            id="title"
            onChange={handleOnChange}
            value={title}
          />
        </div>

        <div className="formProp">
          <label>Description: </label>
          <input
            // className="description"
            id="description"
            onChange={handleOnChange}
            value={description}
          />
        </div>
        <div className="formProp">
          <label>Price: </label>
          <input
            // className="price"
            id="price"
            onChange={handleOnChange}
            value={price}
          />
        </div>
        <div className="formProp">
          <label>Location: </label>
          <input
            // className="location"
            id="location"
            onChange={handleOnChange}
            value={location}
          />
        </div>
        <button 

        type="submit">Update your Post</button>
      </form>
    </div>
  );
};

export default ModPost;
