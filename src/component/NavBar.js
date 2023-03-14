import React from 'react';

import "./NavBar.css"
import SideBar from './Sidebar/Sidebar';

function NavBar() {
  const date = new Date().toLocaleDateString();

  return (
    <div className="dashboard">
      <nav className="nav-header">
        <div className="logo">
          {/* <img src="logo.png" alt="Logo" /> */}
          <h1>Zcon</h1>
        </div>
        <div className="date">{date}</div>
        <div className="account">
          {/* <img src="avatar.png" alt="Avatar" /> */}
          <div className="name">Piyush</div>
          <div className="settings">
            <i className="fas fa-cog"></i>
            <div>Account Settings</div>
          </div>
        </div>
      </nav>
      <div>
     <SideBar></SideBar>
      
      </div>
    </div>
  );
}

export default NavBar;
