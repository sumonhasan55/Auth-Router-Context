import React, { useContext } from 'react';
import { Form, Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


const Register = () => {
const{createUser,signInWithGoogle} =useContext(AuthContext);
const navigate = useNavigate()

const handlesubmit =(event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email =form.email.value;
    const password=form.password.value;
    createUser(email,password)
    .then((result)=>{
        const user = result.user;
        console.log(user)
    })
    .catch((error)=>{
        console.error(error)

    })
    console.log(name,email,password)
    form.reset()
    navigate('/');
};

const handleGoogleSignIn = ()=>{
    signInWithGoogle()
    .then((result)=>{
        const user = result.user;
        console.log(user)
    })
    .catch((error)=>{
        console.error(error)
    })

}
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                        <p className="py-6">For Register Input Name, Email and Pasword</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handlesubmit}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>
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
                                    <p className="label-text-alt link link-hover">Have an Account? <Link to='/login'>Login</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                                <br></br>
                                <button className="btn btn-warning" onClick={handleGoogleSignIn}>Continue With Google</button>
                            </div>
                        </div>
                        </Form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;