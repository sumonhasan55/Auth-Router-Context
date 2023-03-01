import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
    const {user,logOut}= useContext(AuthContext)
    const handleSignOut =()=>
    logOut()
    .then(()=>{})
    .catch((error)=>{
        console.error(error)
    })
    return (
        <div>
          
            <div className="navbar bg-primary text-primary-content">

                <Link className="btn btn-ghost normal-case text-xl" to='/'>AuthEr</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/service'>Service</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {
                   user?<button className="btn btn-sm btn-secondary" onClick={handleSignOut}>LogOut</button>
                    :<Link to='/login'><button className="btn btn-sm btn-secondary">Login</button></Link>
                }
                
            </div>

        </div>
    );
};

export default Header;