import React, { useState, useEffect } from "react";
import { getUserInfo } from "../api";

const MyMessages = (props) => {
  let token = localStorage.getItem("token");
  const [myInfo, setMyInfo] = useState({});
  const [user, setUser] = useState({});


  useEffect(() => {
    // token = localStorage.getItem("token")
    async function getMyInfo() {
      const myReturnedInfo = await getUserInfo(token);
      console.log(myReturnedInfo, "<<this is the returned info");
      setMyInfo(myReturnedInfo); 
      setUser(myInfo.data)
    }
    getMyInfo();
  }, []);
const userPosts = user.posts;
const userMessages = user.messages;
const userName = user.username;
console.log()
  return (

    <div>
    {userMessages && userMessages.length
          ? userMessages.map((message) => {
              return (
                <div key={message._id}>
                  <h2>From User: {message.fromUser.username}</h2>
                  <h3>{message.post.title}</h3>
                  <p>{message.content}</p>
                </div>
              );
            })
          : null}
    </div>
  )}
export default MyMessages;