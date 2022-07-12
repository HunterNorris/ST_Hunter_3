import React,  { useState } from "react";
import { addMessage } from "../api";

const MessageForm = ({singlePost, setIsShown}) => {

  const [content, setContent] = useState("");

  const handleOnChange = (event) => {
    const changed = event.target.id;
    if (changed === "") {
      setContent(event.target.value);
      console.log(content, "Content, show me the money");}
  }

  const handleMessage = async (event) => {
    event.preventDefault();
    addMessage(singlePost._id, content);
    setIsShown(false)
  
    }

  return (
    <form onSubmit={handleMessage}>
      <h3>Message Form</h3>
      <label htmlFor="message">Message: </label>
      <input
        value={content}
        onChange={handleOnChange}
      />
      <button>Submit</button>
    </form>
  );
};
export default MessageForm;







// import React from "react";
// import { useState } from "react";
// import { addMessage } from "../api";

// const MessageForm = ({token, POST_ID}) => {
 
//   const [content, setContent] = useState("");

//   const handleMessage = async (event) => {
//     event.preventDefault();
//     try {
//       const token =localStorage.getItem('token')
//       const response = await addMessage({token, POST_ID, content});
//       const data = await response.json();
//       console.log(data,"show me the money");
//       console.log(response,"show me the money");
//     } catch (error) {
//       console.error(error);
//     }
   
//   };
//   return (
//     <form onSubmit={handleMessage}>
//       <h3>Message Form</h3>
//       <label htmlFor="messages">Message: </label>
//       <input
//         value={content}
//         onChange={(event) => {
//           setContent(event.target.value);
//         }}
//       />
//       <button>Submit</button>
//     </form>
//   );
// };

// export default MessageForm;