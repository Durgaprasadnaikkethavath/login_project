import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3100/login", loginData)
      .then((result) => {
        console.log(result);
        navigate("/account");
        // if (result.data === "Success") {
        // }
      })
      .catch((err) => console.log(err));
  };

  const handleClear = () => {
    setLoginData({
      name: "",
      password: "",
      title: "",
    });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSignUp}>
        <label>name</label>
        <input
          type="text"
          value={loginData.name}
          onChange={(e) => setLoginData({ ...loginData, name: e.target.value })}
        />
        <label>password</label>
        <input
          type="password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />

        <button type="submit">Login</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default Login;
