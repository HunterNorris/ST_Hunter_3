import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./Userbar.css";



const Userbar = ({ setIsLoggedIn })=>{

    function logOut () {
        setIsLoggedIn(false);
        localStorage.clear("token")
    }

    return(
        <div className="userbar">
           
            
                <Link to="/newpost"> MAKE A POST </Link>
                <Link to="/Messages"> myMESSAGES </Link>
                <Link to="/myposts"> myPOSTS</Link>
                <button onClick={logOut}>LOG OUT!</button>
                
           
        
        
           
        </div>
    )};
export default Userbar;