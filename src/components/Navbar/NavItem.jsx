import React, { useState } from "react";
import "./navBar.css";

const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <span>{props?.text} </span>
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
};

export default NavItem;
