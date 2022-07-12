import React from "react";
import { deletePost } from "../api";

const Delete = ({singlePost, setShowDelete}) => {

    return (
        <div>
            <div>Are you sure you want to DELETE {singlePost.title}?
            </div>
            <div>
                <button
                onClick={(event) =>{
                    deletePost(singlePost._id)
                    setShowDelete(false)
                }}
                
                >Yep!</button>
                </div>
            
        </div>
    )
}

export default Delete