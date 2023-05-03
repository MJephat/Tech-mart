import React, { useState } from "react";


const Loginform = () => {

    const[popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    
    
    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
        
        <div className="login-btn">Login</div>
        
        <p className="text" onClick={popup}>Or login usign</p>
        
        <div className="alt-login">
            <div className="Facebook"></div>
            <div className="google"></div>
        </div>
        <div className={popupStyle}>
            <h3>Login Failed</h3>
            <p>Username or password incorrect</p>
        </div>
        </div>
    )
    }
export default Loginform;