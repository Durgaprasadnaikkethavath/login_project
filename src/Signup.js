import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    name: "",
    password: "",
    title: "",
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3100/signup", signupData)
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  const handleClear = () => {
    setSignupData({
      name: "",
      password: "",
      title: "",
    });
  };
  return (
    <div>
      <h1>SignUp Page</h1>
      <form onSubmit={handleSignUp}>
        <label>name</label>
        <input
          type="text"
          value={signupData.name}
          onChange={(e) =>
            setSignupData({ ...signupData, name: e.target.value })
          }
        />
        <label>password</label>
        <input
          type="password"
          value={signupData.password}
          onChange={(e) =>
            setSignupData({ ...signupData, password: e.target.value })
          }
        />
        <label>title</label>
        <input
          type="text"
          value={signupData.title}
          onChange={(e) =>
            setSignupData({ ...signupData, title: e.target.value })
          }
        />
        <button type="submit">SignUp</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default Signup;
