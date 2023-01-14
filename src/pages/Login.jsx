import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import ButtonLoading from "../components/ButtonLoading";
const Login = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(e.target[0].value);
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error?.message === "Firebase: Error (auth/user-not-found).");
      setError(error);
      setLoading(false);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Ngechat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="email" id="email" />
          <input
            type="password"
            name="password"
            placeholder="password"
            id="password"
          />
          {loading ? <ButtonLoading /> : <button>Login</button>}
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        {error?.message === "Firebase: Error (auth/user-not-found)." && (
          <p className="error">User not found</p>
        )}
      </div>
    </div>
  );
};

export default Login;
