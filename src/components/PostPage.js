import React, {useState, useEffect } from "react";
import { getAllPosts } from "../api";
import Messageform from "./MessageForm";
import './PostPage.css'

const PostPage = (props) => {
    const [allPosts, setAllPosts] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const [clickID,setClickID] = useState("");

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
  console.log(props, "show me the money")
    const displayPosts = allPosts.map((posts, index) => {
      return (
        <div className="fullPost" key={index}>
          <div className="title">{posts.title}</div>
          <h4>{posts.description}</h4>
          <div>
            <div>{posts.location}</div>
            <div>{posts.price}</div>
            <button
            onClick={(event) => {
              setIsShown(true)
               setClickID(`${posts._id}`)
            }}
            
            >Message Poster About This Item</button>
          </div>
          {isShown && clickID ===`${posts._id}` ? <Messageform singlePost= {posts} setIsShown={setIsShown}/> :null}
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