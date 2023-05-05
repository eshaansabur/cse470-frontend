import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Loading/Loading';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const handleSignup =async (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        //console.log(email, password);
        await createUserWithEmailAndPassword(email, password);
    }
    let message;
    const navigate = useNavigate();

    if(user){
        navigate('/');
    }
    if (error) {
        return (
          
            message= <p className='text-danger'>Error: {error?.message}</p>
        );
      }
      if (loading) {
        return <Loading></Loading>;
      }
    return (
        <div className="container login">
            <div className="row mt-5">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup} className='text-start w-50'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" required/>
                </div>
                <p>NOT New to Sharika's kitchen? Please <Link to='/login'>Login</Link></p>
                <button type="submit" className="btn btn-primary">Sign Up</button>
                {
                    message
                }
                </form>
                
            </div>
        </div>
    );
};

export default SignUp;