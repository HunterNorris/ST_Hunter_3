import React, { useState, useEffect } from "react";
import { getUserInfo } from "../api";

const Profile = (props) => {
    let token = localStorage.getItem("token");
    const [myInfo, setMyInfo] = useState({})
    useEffect(()=> {
        // token = localStorage.getItem("token")
        async function getMyInfo(){
            const myReturnedInfo = await getUserInfo(token)
            console.log(myReturnedInfo, '<<this is the returned info')
            setMyInfo(myReturnedInfo)
        }
        getMyInfo()
    },[])
    // console.log(myInfo, "this is line 17")
    return (
        <div className="box"> 
  
        {myInfo.data ? <div>
            <div>{myInfo.data.posts}</div>
            <div>username: {myInfo.data.username}</div>
        </div>: null}

        </div>    
        )
}
export default Profile