import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { registerPerson } from "../api";
import "./Register.css"

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("i am submitting");
    const token = await registerPerson(username, password);
    console.log(token);
    localStorage.setItem("token", token);
    setUsername("");
    setPassword("");
  };

  return (
    <form id="register" onSubmit={handleSubmit}>
      <div>
        <fieldset>
          <label>
            Register New User
            <input
              name="username"
              type="text"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
                console.log(username);
              }}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            Password
            <input
              name="password"
              type="text"
              value={password}
              onChange={(event) => {
                console.log(event.target.value);
                setPassword(event.target.value);
              }}
            />
          </label>
        </fieldset>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Register;
