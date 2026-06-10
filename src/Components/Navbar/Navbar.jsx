import React, { useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { handleScrollOrNavigate } from '../../utils/handleScrollOrNavigate';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_open from '../../assets/menu.png';
import menu_close from '../../assets/close.png';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();

  const openMenu = () => {
    menuRef.current.style.right = "0%";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-100%";
  };

  const handleClick = (section) => {
    setMenu(section);
    closeMenu();
    handleScrollOrNavigate(`#${section}`, navigate, location.pathname);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />

        <li onClick={() => handleClick("home")}>Home {menu === "home" && <div className="active-underline"></div>}</li>
        <li onClick={() => handleClick("about")}>About Me {menu === "about" && <div className="active-underline"></div>}</li>
        <li onClick={() => handleClick("experience")}>Experience {menu === "experience" && <div className="active-underline"></div>}</li>
        <li onClick={() => handleClick("portofolio")}>Portofolio {menu === "portofolio" && <div className="active-underline"></div>}</li>
        <li onClick={() => handleClick("certificate")}>Certificate {menu === "certificate" && <div className="active-underline"></div>}</li>
        <li onClick={() => handleClick("contact")}>Contact {menu === "contact" && <div className="active-underline"></div>}</li>
      </ul>
      <div onClick={() => handleClick("contact")} className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
