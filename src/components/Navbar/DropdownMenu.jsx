import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import {
  AiOutlineUser,
  AiOutlineLogout,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdHelpOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");

  function DropdownItem(props) {
    return (
      <NavLink
        to={`/${props.path}`}
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </NavLink>
    );
  }
  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
      >
        <div className="dropdown-menu">
          <DropdownItem path="profile" leftIcon={<AiOutlineUser />}>
            My Profile
          </DropdownItem>
          <DropdownItem path="setting" leftIcon={<AiOutlineSetting />}>
            Settings
          </DropdownItem>
          <DropdownItem path="help" leftIcon={<MdHelpOutline />}>
            Helps
          </DropdownItem>
          <DropdownItem path="singout" leftIcon={<AiOutlineLogout />}>
            Sign Out
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
