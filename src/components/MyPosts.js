import { useEffect, useState } from "react";
import { getUserInfo } from "../api";
import { Delete, ModPost } from "./";
import './MyPosts.css';

const MyPosts = (props, {title}) => {
    const [isShown,setIsShown]= useState(false)
    const [showDelete, setShowDelete]= useState(false)
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

    const filteredPosts = myInfo.posts ? myInfo.posts.filter((post)=> {
      return post.active
    }): null
    
    return (
        <div className="box"> 
  
        {myInfo.posts ? filteredPosts.map((posts, index) => {
            return (
          <div className="fullPost" key={index}>
            <div className="title">{posts.title}</div>
            <h4>{posts.description}</h4>
            <div>
              <div>{posts.location}</div>
              <div>{posts.price}</div>
              <div className="postoptions">
                <button
                 onClick={(event) => {
                 setIsShown(true)
                  setClickID(`${posts._id}`)
                 }}>Edit Post</button>
          
               <button
                onClick={(event) => {
                setShowDelete(true)
                setClickID(`${posts._id}`)
              }}>Delete Post</button>
            
              </div>
            </div>  
                  <div> 
                {isShown && clickID ===`${posts._id}` ? <ModPost singlePost= {posts} setIsShown={setIsShown}/> :null}
              </div>     
              <div>
                {showDelete && clickID === `${posts._id}` ?
                <Delete singlePost = {posts} setShowDelete={setShowDelete} myInfo={myInfo} setMyInfo={setMyInfo}/> :null}
              </div>
          </div>
            )    
         }): null
        }

        </div>
     )
       

}

export default MyPosts

