import React,{ useState } from 'react';
import {  Link } from "react-router-dom";

const Navbar= () =>{
    const [ find, setFind] = useState("");
    console.log(find)

  return (
  <nav className='nav'>
    <span className='logo'>ⓉⒺⒸⒽⓂⒶⓇⓉ</span>
    {/* <input id="search" onChange={(e)=>setFind(e.target.value)}  type="text" placeholder='search' /> */}
    <li>
      <Link to="/signup">signup</Link>
    </li>
 
    
    <li>
      <Link to="/signin">signin</Link>
    </li>
    <li>
      <Link to="/products">products</Link>
    </li>
    <li>
      <Link to="/">menu</Link>
    </li>
  </nav>
  );
}
export default Navbar;