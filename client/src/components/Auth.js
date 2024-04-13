import React, { useEffect, useState } from "react";
import Login_Image from "../images/login.svg";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  const page = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
    if (page === "login") {
      setAuth(true);
    } else if (page === "signup") {
      setAuth(false);
    }
  }, [page]);

  function signup(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/signup", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        setName("");
        setEmail("");
        setPassword("");
        navigate("/auth/login");
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  function login(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        if (token) {
          const decoded = jwtDecode(token);

          console.log(decoded);
          navigate("/dashboard");
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  function signuppage() {
    setAuth(false);
    navigate("/auth/signup");
  }
  function loginpage() {
    setAuth(true);
    navigate("/auth/login");
  }

  return (
    <div className="vh-100 container d-flex justify-content-center align-items-center averta">
      <div className="row w-100">
        <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center">
          <img src={Login_Image} className="img-fluid" alt="Login" />
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="glassmorph p-5 shadow">
            <h2 className="mb-4 text-center">
              {auth ? <b>Login</b> : <b>SignUp</b>}
            </h2>
            <div className={`mb-3 ${auth ? "d-none" : ""}`}>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              {auth ? (
                <button className="btn-notesy" onClick={login}>
                  Login
                </button>
              ) : (
                <button className="btn-notesy" onClick={signup}>
                  Sign Up
                </button>
              )}
            </div>
            <hr />
            <div className="text-center">
              {auth ? (
                <>
                  <span>Wanna Create an Account ?</span>
                  <span className="links" onClick={signuppage}>
                    Sign Up
                  </span>
                </>
              ) : (
                <>
                  <span>Already have an account ? </span>
                  <span className="links" onClick={loginpage}>
                    Login
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
