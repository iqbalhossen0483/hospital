import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import googleImg from "../../images/google.png";
import useAuth from "../Hooks/useAuth";
import useTailwind from "../Hooks/useTailwind";

const SignUp = () => {
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(false);
  const { register, handleSubmit } = useForm();
  const { input } = useTailwind();
  const { signInWithGoogle, signUpWithEmail, setIsLoad, updatUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.state?.from.pathname;

  const signUpEmail = (email, password, name) => {
    setDisable(true);
    signUpWithEmail(email, password, name)
      .then((result) => {
        updatUser(name);
        setError("");
        navigate(url || "/");
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

  const onSubmit = (data) => {
    let name = "";

    if (data.password !== data.re_password) {
      return setError("Your password should be match above");
    }
    if (data.password.length < 6) {
      return setError("Your password must be 6 character or above");
    }

    setError("");
    name = data.firstName + " " + data.lastName;
    data.name = name;
    signUpEmail(data.email, data.password, data.name);
  };

  //redirect user
  const signInGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        setError("");
        navigate(url || "/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoad(false);
      });
  };
  return (
    <div className='login-container lg:w-[500px]'>
      <h1 className='text-xl text-center my-3 font-medium'>Please Sign Up</h1>
      <div className='px-2 md:px-4'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
          <div className='input-wrapper'>
            <input
              className={input + " w-full"}
              {...register("firstName", { required: true })}
              required
              placeholder='Enter your first name'
            />
            <label>First name:</label>
          </div>
          <div className='input-wrapper'>
            <input
              className={input + " w-full"}
              {...register("lastName", { required: true })}
              required
              placeholder='Enter your last name'
            />
            <label>Last name:</label>
          </div>
          <div className='input-wrapper'>
            <input
              className={input + " w-full"}
              type='email'
              {...register("email", { required: true })}
              required
              placeholder='Enter your email'
            />
            <label>Email:</label>
          </div>
          <div className='input-wrapper'>
            <input
              className={input + " w-full"}
              type='password'
              {...register("password", { required: true })}
              required
              placeholder='Give a password'
            />
            <label>Password:</label>
          </div>
          <div className='input-wrapper'>
            <input
              className={input + " w-full"}
              type='password'
              {...register("re_password", { required: true })}
              required
              placeholder='Re-enter the password'
            />
            <label>Re-type password:</label>
          </div>
          <p className='text-red-600 text-center col-span-2'>{error}</p>
          <div className='mt-5 flex justify-center'>
            <button
              disabled={disable}
              className='button bg-primary rounded-md'
              type='submit'
            >
              {disable ? "Loading..." : "Sign up"}
            </button>
          </div>
        </form>
      </div>

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
      <p className='text-center text-sm'>
        Already have a account?{" "}
        <Link to='/log-in' className='text-blue-500 hover:underline'>
          Please Log-In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
