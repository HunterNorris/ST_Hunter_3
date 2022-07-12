import React from "react";
import { deletePost } from "../api";

const Delete = ({singlePost, setShowDelete, myInfo,setMyInfo}) => {

    return (
        <div>
            <div>Are you sure you want to DELETE {singlePost.title}?
            </div>
            <div>
                <button
                onClick={async (event) =>{
                   const confirmation = await deletePost(singlePost._id)
                    setShowDelete(false);
                    console.log(myInfo.posts, "show me BIG DELETE ")
                    if (confirmation.success ){
                        setMyInfo({...myInfo ,posts:myInfo.posts.filter((post)=> {
                            return(post._id !== singlePost._id)
                        })})
                    }
                    
                }}
                
                >Yep!</button>
                </div>
            
        </div>
    )
}

export default Delete