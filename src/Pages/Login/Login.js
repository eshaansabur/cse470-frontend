import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {
    let message;
    const navigate= useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const handleLogin =(event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        //console.log(email, password);
        signInWithEmailAndPassword(email, password);
    }
    if(user){
        navigate('/home');
    }
    return (
        <div className="container login">
            <div className="row mt-5">
                <h2>Login</h2>
                <form onSubmit={handleLogin} className='text-start w-50'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" required/>
                </div>
                <p>New to Sharika's kitchen? Please <Link to='/signup'>Sign Up</Link></p>
                <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;