import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import googleImg from "../../images/google.png";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState("");
  const { user, signInWithGoogle, logInWithEmail, setIsLoad } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const url = location.state?.from.pathname;

  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  //redirect user
  const signInGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(url || "/");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoad(false);
      });
  };
  const logInEmail = (e, email, password) => {
    setDisable(true);
    console.log("click");
    logInWithEmail(e, email, password)
      .then((result) => {
        navigate(url || "/");
        setError("");
        setDisable(false);
      })
      .catch((error) => {
        setError(error.message);
        setDisable(false);
      })
      .finally(() => {
        setIsLoad(false);
      });
  };
  return (
    <div className='login-container'>
      <h2 className='text-xl text-center my-3 font-medium'>Please Log In </h2>
      <form
        onSubmit={(e) => logInEmail(e, email, password)}
        className='space-y-3'
      >
        <div className='input-wrapper'>
          <input
            onBlur={(e) => getEmail(e)}
            type='email'
            name='email'
            required
            placeholder='Enter your email'
          />
          <label>Email:</label>
        </div>
        <div className='input-wrapper'>
          <input
            onBlur={(e) => getPassword(e)}
            type='password'
            required
            name='password'
            placeholder='Enter the password'
          />
          <label>Password:</label>
          {user.email && (
            <span className='my-0 cursor-pointer'>Forget password?</span>
          )}
        </div>
        {error && <p className='text-red-500 col-span-2'>{error}</p>}
        <div className='mt-5 flex justify-center'>
          <button
            disabled={disable}
            className='button bg-primary rounded-md'
            type='submit'
          >
            {disable ? "Loading..." : "Log In"}
          </button>
        </div>
      </form>
      <div className='mt-3 mb-3'>
        <p className='text-center'>---------Or---------</p>
        <div className='flex justify-center mt-6'>
          <button
            onClick={signInGoogle}
            className='button normal-case flex gap-2 bg-slate-700 items-center'
          >
            <img className='h-7' src={googleImg} alt='' />
            <span>Google</span>
          </button>
        </div>
      </div>
      <div className='text-center text-sm'>
        New to here?{" "}
        <Link to='/sign-up' className='text-blue-500 hover:underline'>
          Please Sign-Up
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
