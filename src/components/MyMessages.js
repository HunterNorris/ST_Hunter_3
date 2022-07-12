import React, { useState, useEffect } from "react";
import { getUserInfo } from "../api";

const MyMessages = (props) => {
  let token = localStorage.getItem("token");
  const [myInfo, setMyInfo] = useState({});

  useEffect(() => {
    // token = localStorage.getItem("token")
    async function getMyInfo() {
      const myReturnedInfo = await getUserInfo(token);
      console.log(myReturnedInfo, "<<this is the returned info");
      setMyInfo(myReturnedInfo);
    }
    getMyInfo();
  }, []);

  return (
    // <div className="box">
    //   {myInfo.data ? (
    //     <div>
    //       <div>{myInfo.data.posts}</div>
    //       <div>username: {myInfo.data.username}</div>
    //     </div>
    //   ) : null}
    // </div>


myInfo.data ? myInfo.data.posts.map((posts, index) => {
    return (
        <div>
    <div className="title">{posts.title}</div>
    <div>{posts.messages.content}</div>
    <div>From User: {posts.messages.content.fromUser.username}</div>
        </div>
    )
    }):null
  )
};
export default MyMessages;
