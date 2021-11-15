import classes from "./Header.module.scss";
import { NavLink } from "react-router-dom";

import { useState } from "react";

import logo from "../assets/img/logo.png";
const Layout = (props) => {
  const [mobileActive, setMobileActive] = useState(false);

  const menuTogglerClasses =
    classes["hamburger-menu__toggler"] +
    " hamburger-menu__toggler-js " +
    (mobileActive ? classes["active"] : "");
  const toggleMobileMenu = () => {
    setMobileActive((prevState) => !prevState);
  };
  return (
    <>
      <section className={classes.header}>
        <div className={classes["menu--desktop"]}>
          <ul>
            <li>
              <NavLink
                activeClassName={classes.active}
                className="h4"
                to="/breakfast"
              >
                Śniadanie
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={classes.active}
                className="h4"
                to="/lunch"
              >
                Lunch
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={classes.active}
                className="h4"
                to="/menu"
              >
                Menu
              </NavLink>
            </li>
            <li>
              <img src={logo} alt="" />
            </li>
            <li>
              <NavLink
                activeClassName={classes.active}
                className="h4"
                to="/gallery"
              >
                Galeria
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={classes.active}
                className="h4"
                to="/comments"
              >
                Opinie
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={classes.active}
                className="h4"
                to="/contact"
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div onClick={toggleMobileMenu} className={menuTogglerClasses}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
      </section>
    </>
  );
};

export default Layout;
