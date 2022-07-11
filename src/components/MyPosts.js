import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { getUserInfo, getAllPosts } from "../api";
import {ModPost} from "./"
import './MyPosts.css'

const MyPosts = (props) => {
    let token = localStorage.getItem("token");
    const [myInfo, setMyInfo] = useState({})
    const [singlePost, setSinglePost] = useState ([])

    const handleMessage = (event) => {
      const singledOutPost = myInfo.data.posts.filter(element =>element._id == event.target.id)
      setSinglePost(singledOutPost[0])
      return singlePost
    }

    useEffect(()=> {
        token = localStorage.getItem("token")
        async function getMyInfo(){
            const myReturnedInfo = await getUserInfo(token)
            console.log(myReturnedInfo, '<<this is the returned info')
            setMyInfo(myReturnedInfo)
        }
        getMyInfo()
    },[])

    console.log(myInfo, "this is line 18")

    return (
        <div className="box"> 
  
        {myInfo.data ? myInfo.data.posts.map((posts, index) => {
            return (
          <div className="fullPost" key={index}>
            <div className="title">{posts.title}</div>
            <h4>{posts.description}</h4>
            <div>
              <div>{posts.location}</div>
              <div>{posts.price}</div>
              <div>post ID: {posts._id}</div>
              <div className="postoptions">
              {/* <Link to="/modpost">EDIT POST</Link>              
              <Link to="/delete">DELETE POST</Link> */}
              <Link to="/modpost">
                <button id={`${posts._id}`}
                 onClick={(event) => {
                 handleMessage (event)
                 }}>Edit Post</button>
              </Link>
              <Routes>
                <Route to="/modpost" element={<ModPost singlePost={posts}/>}></Route>
              </Routes>
              <button>Delete Post</button>
              </div>
            </div>           
          </div>
            )
           
         }): null
        }

        </div>
     )
       

}

export default MyPosts

