import React, {useEffect, useState} from 'react';
import './CSS/Sidebar.css';
import logo from '../assets/logo.png';


const Sidebar = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };


  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);


  return (
    <div className="sidebar">
      <div className="top_section">
        
        <div className="toggle">
          <i class="bi bi-list"></i>
        </div>
      </div>
      <div className="logo_section">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;