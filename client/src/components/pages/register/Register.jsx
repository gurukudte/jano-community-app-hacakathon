import React, { useContext } from "react";
import ChatContext from "../../../context/appContext"
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { activeTab, setActiveTab } = useContext(ChatContext);
  const navigate = useNavigate();
  return (
    <div className="register">
      <button onClick={() => {
        setActiveTab("profile")
        navigate("/app")
      }}>Register</button>
      {/* <div className="register-wrapper">
        <div className="register-wrapper-heading">
          <h3>JANO</h3>
          <p>Meet New people</p>
          <p>Meet New places</p>
          <p>Explore new hobbies</p>
        </div>
        <div className="register-wrapper-form">
          <form
          // onSubmit={(e) => {
          //   click(e);
          // }}
          >
            <label htmlFor="username">
              Username
              <input
                type="text"
                // value={userData.userName}
                maxLength="10"
                // onChange={(e) => {
                //   InputchangeHandler(e.target.value, "userName");
                // }}
              />
            </label>
            <label htmlFor="email">
              Email address
              <input
                type="email"
                // value={userData.email}
                // onChange={(e) => {
                //   InputchangeHandler(e.target.value, "email");
                // }}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                // value={userData.password}
                minLength={6}
                // onChange={(e) => {
                //   InputchangeHandler(e.target.value, "password");
                // }}
              />
            </label>
            <div className="register-wrapper-form-terms">
              <input type="checkbox" name="terms" />
              <p>
                I agree to the <a href="/mk">Terms & Privacy</a>
              </p>
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="register-wrapper-signin">
          <p>
            Have an account?<a href="/login">Sign in</a>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Register;
