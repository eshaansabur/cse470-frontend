import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';
const Navbar = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const [user, loading2, error2] = useAuthState(auth);
    const logOut =() =>{
        signOut(auth);
    }
    const navigate = useNavigate();
    const seeLogin =()=>{
        navigate('/login');
    }
    if(loading || loading2){
        return <Loading></Loading>
    }
    return (
        <>
        {
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" ><Link to='/'>Sharika'S Kitchen</Link></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className='nav-link' to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to='/about'>About Us</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to='/products'>Products</Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-link' to='/contact'>Contact</Link>
                    </li>
                    {!user?
                    <li className="nav-item">
                    <button onClick={seeLogin} className='btn btn-danger text-white px-3'>Login</button>
                    </li>
                    :
                    <>
                    <li className="nav-item">
                    <Link className='nav-link' to='/cart'>Make Order</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        User: {user.uid}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a onClick={signOut} className="dropdown-item" href="#">Logout</a></li>
                    </ul>
                    </li>
                    </>
                    }
                </ul>
                </div>
            </div>
            </nav>
            
        }
        </>
    );
};

export default Navbar;