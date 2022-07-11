import React, {useState, useEffect } from "react";
import { getAllPosts } from "../api";
import './PostPage.css'

const PostPage = (props) => {
    const [allPosts, setAllPosts] = useState([]);
    // const fetchAllPosts = async () => {
    //   const data = await getAllPosts();
    //   setAllPosts(data);
    // };
    // fetchAllPosts();
    useEffect(() => {
      getAllPosts()
        .then((posts) => {
          setAllPosts(posts);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    const displayPosts = allPosts.map((posts, index) => {
      return (
        <div className="fullPost" key={index}>
          <div className="title">{posts.title}</div>
          <h4>{posts.description}</h4>
          <div>
            <div>{posts.location}</div>
            <div>{posts.price}</div>
            <button>Message Poster About This Item</button>
          </div>
          
        </div>
      );
    });
    return (
        <div>
            {displayPosts}
        </div>
    )
}
export default PostPage