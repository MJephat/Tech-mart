import React from "react";


const SignupForm = () => {

    
    return (
        <div className="cover">
            <h1>Signup</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <input type="email" placeholder="email" />
            <input type="Text" placeholder="address" />
            
            <div className="login-btn">Signup</div>
        
        <p className="text">Or Signup usign</p>
        
        <div className="alt-login">
            <div className="Facebook"></div>
            <div className="google"></div>
        </div>
            </div>
    )
    }
export default SignupForm;