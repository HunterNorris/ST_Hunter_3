import React, { useState, useEffect } from "react";
import { getUserInfo } from "../api";
import "./MyMessages.css";

const MyMessages = (props) => {
  let token = localStorage.getItem("token");
  const [myInfo, setMyInfo] = useState({});


  useEffect(() => {
    async function getMyInfo() {
      const myReturnedInfo = await getUserInfo(token);
      console.log(myReturnedInfo, "<<this is the returned info");
      setMyInfo(myReturnedInfo);
      
      
    }
    getMyInfo();
  }, []);

console.log(myInfo, "show me the money")
  return (

    <div>
    {myInfo.data ? myInfo.data.messages.map((message, index)=>{
      return( <div className="MessageBox" key={index}>

        <div>From User: {message.fromUser.username}</div>

        <div>Regarding: {message.post.title}</div>
        
        <div>{message.content}</div>
       
      </div>
      
      
      )
    }):null}
    </div>
  )}
export default MyMessages;