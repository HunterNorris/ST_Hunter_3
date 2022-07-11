import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { getUserInfo, getAllPosts } from "../api";
import {ModPost} from "./"
import './MyPosts.css'

const MyPosts = (props) => {
    const [isShown,setIsShown]= useState(false)
    const [clickID,setClickID] = useState("")
    let token = localStorage.getItem("token");
    const [myInfo, setMyInfo] = useState({})
    const [singlePost, setSinglePost] = useState ([])

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
                <button
                 onClick={(event) => {
                 setIsShown(true)
                  setClickID(`${posts._id}`)
                  console.log(clickID, "show me the money 2")
                 console.log(isShown,"show me the money")
              
                 }}>Edit Post</button>
                 {/* this is line 44 */}
          

              <button>Delete Post</button>
            
              </div>
            </div>  
                  <div> 
                {isShown && clickID ===`${posts._id}` ? <ModPost singlePost= {posts} setIsShown={setIsShown}/> :null}
              </div>     
          </div>
            )
           
         }): null
        }

        </div>
     )
       

}

export default MyPosts


