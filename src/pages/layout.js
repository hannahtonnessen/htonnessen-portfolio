import { Outlet, NavLink } from "react-router-dom";
import React, { useState } from 'react';
import './layout.css';



const Layout = () => {
    const [isActive, setIsActive] = useState('first');
    const handleButtonClick = (button) => {
        setIsActive(button);
    }
  return (
    <>
        <div className="image">
            {/* <div className="nav">
                <div className="item">
                    <NavLink className={({ isActive }) => "anchor" + (isActive ? " activated" : "")} to="/about" >About</NavLink>
                </div>
                <div className="item">
                    <NavLink className={({ isActive }) => "anchor" + (isActive ? " activated item" : "")} to="/projects">Projects</NavLink>
                </div>
            </div> */}
            <div className="nav" id="sidebar">
                <div className="item">
                    <NavLink   onClick={() => handleButtonClick('first')} className={isActive === "first" ? " anchor activated" : "anchor"} to="/about" >About</NavLink>
                </div>
                <div className="item">
                    <NavLink onClick={() => handleButtonClick('second')} className={isActive === "second" ? "anchor activated" : "anchor"} to="/projects">Projects</NavLink>
                </div>
            <Outlet/>
            </div>
        </div>
        <Outlet />
    </>
  )
};

export default Layout;