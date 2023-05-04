import React from 'react';
// import './App.css';
const Sidebar = () => {
    return (
      <div className="sidebar">
        <div id="sidebar-header">
          <p>MENU</p>
        </div>
        <ul>
          <li><a href="#">Name</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Conditions</a></li>
        </ul>
        
      </div>
    );
  };
  
  export default Sidebar;