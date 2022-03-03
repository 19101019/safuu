import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./navbar.css";
import img from "../assets/logo.png";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="nav_switch">
            <span id="safuu_btn">SAFUU</span>
            <span>Connect Wallet</span>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <div className="logo_img">
              <img src={img} alt="" />
            </div>
            {SidebarData.map((item, index) => {
              if(item.title === 'Swap'|| item.title === "Docs"){
                return (
                  <li key={index} className={item.cName}>
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </li>
                );
              }
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;