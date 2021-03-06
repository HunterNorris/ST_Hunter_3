import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Header,
  Login,
  ModPost,
  MyMessages,
  MyPosts,
  NewPost,
  PostPage,
  Register,
  Userbar,
} from "./";
import "./App.css";

// This would be in your component File
async function handleSubmit(event) {
  event.preventDefault();
  console.log("this is your event");
  const backFromAPI = awaitregisterPerson(event);
}

{
  /* <form>

</form>
const result = await response.json()
const token = result.data.token


localStorage.setItem("token", token)
localStorage.getItem(token)

const g */
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token,setToken] = useState('')
  useEffect(()=>{
   const checktoken = localStorage.getItem('token') 
   if (checktoken){
    setToken(checktoken);
    setIsLoggedIn(true);
   }
  }, [])
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      {isLoggedIn || token ? <Userbar setIsLoggedIn={setIsLoggedIn} /> : null}

      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/myposts" element={<MyPosts />} />

        <Route path="/modpost" element={<ModPost />} />
        <Route path="/mymessages" element={<MyMessages />} />
        {/* <Route path='/home" */}
      </Routes>

      {/* <Register />
      <Login /> */}

      {/* <div id='main-section'>
          <Switch>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/register">
              <Register />
          </Route>
          <Route path="/home">
              <Home />
          </Route>
          </Switch>
      </div> */}
    </div>
  );
};
export default App;
