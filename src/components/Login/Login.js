import React from 'react';
import { Link } from 'react-router-dom';
import photo from "../../Assets/login.svg";
const Login = () => {

    const handleLogin =event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        
    return (
        <div className="hero my-5 w-full  ">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
     
      <img className='w-3/4' src={photo} alt="" srcset="" />
    </div>
    <div className="card flex-shrink-0 w-full py-20 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin}  className="card-body">
      <h1 className="text-3xl text-center font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value="Login" />
          
        </div>
      </form>
      <p className='text-center'>New Genious to car <Link className='text-orange-600' to="/signup" >SignUp</Link></p>
  
</div>
    </div>
  </div>

    );
};

export default Login;