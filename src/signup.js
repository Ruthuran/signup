import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import './signup.css';  

export default function Signup() {
  const {
    register,
    handleSubmit,
    reset, 
    formState: { errors },
  } = useForm();

  const [submitSuccess, setSubmitSuccess] = useState(false); 

  
  const onSubmit = (data) => {
    console.log('Signup Data:', data);

    reset();

    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);  
  };

  
  const onError = (errors) => {
    console.log('Form Errors:', errors);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>

      {submitSuccess && (
        <div className="success-message">
          <p>Signup Successful!</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <input
            type="text" {...register('fname', { required: 'First name is required' })} placeholder="First Name" />
          {errors?.fname && <p>{errors.fname.message}</p>}
        </div>

        <div>
          <input
            type="text" {...register('lname', { required: 'Last name is required' })}  placeholder="Last Name" />
          {errors?.lname && <p>{errors.lname.message}</p>}
        </div>

        <div>
          <input
            type="email" {...register('email', { required: 'Email is required' })}  placeholder="Email" />
          {errors?.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <input
            type="password" {...register('password', { required: 'Password is required' })} placeholder="Password" />
          {errors?.password && <p>{errors.password.message}</p>}
        </div>

        <div>
          <input type="submit" value="Sign Up" />
        </div>
      </form>

      <div className="social-login">
        <p>or sign up with</p>
        <button className="google-btn">
          <FaGoogle />
          Google
        </button>
        <button className="facebook-btn">
          <FaFacebook />
          Facebook
        </button>
      </div>
    </div>
  );
}
