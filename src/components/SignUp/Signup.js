import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form className=''>
                <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='email' required/>
                </div>
                <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='password' required/>
                </div>
                <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name='confirm' placeholder='password' required/>
                </div>
                <input className='btn-submit' type="submit" name="" id="" value="Login" />
            </form>
            <p>Already have an account ? <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Signup;