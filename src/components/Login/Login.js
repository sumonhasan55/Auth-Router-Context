import React, { useContext } from 'react';
import { Form } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {

  const {signInUser } = useContext(AuthContext)


  const handlesubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email,password)
    .then(result=>{
      const user= result.user;
      console.log(user)
    })
    .catch(error=>{
      console.error(error)
    })
    console.log(email, password)
    form.reset()
  };


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Login With Email and Pasword</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <Form onSubmit={handlesubmit}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type='submit' className="btn btn-primary">Login</button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;