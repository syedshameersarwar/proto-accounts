import React from 'react';

function SignUp() {
    return (
        <div className = 'signup'> 
            <h1> SIGN UP HERE: </h1>
            <input className='first-name' placeholder='Add Your First Name' type='text'  />
            <input className='last-name' placeholder='Add Your Last Name' type='text'  />
            <input className='Email' placeholder='Email-ID' type='Email'  />
            <input className='password' placeholder='Password' type='password'  />
            <input className='cnfrmpassword' placeholder='Correct Password' type='password'  />
            <button className='signup-btn'> Sign Up </button> 
        </div>
    )
}

export default SignUp