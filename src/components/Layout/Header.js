import classes from "./Header.module.scss";
import { NavLink, useLocation } from "react-router-dom";

import { useState } from "react";
import HeaderCartButton from "./HeaderCartButton";

import logo from "../../assets/img/logo.png";
const Header = (props) => {
  const [mobileActive, setMobileActive] = useState(false);
  const params = useLocation();
  const path = params.pathname.slice(1);

  const menuPaths = {
    breakfast: "Breakfast",
    lunch: "Lunch",
    menu: "Menu",
    gallery: "Gallery",
    comments: "References",
    contact: "Contact",
  };

  const menuTogglerClasses =
    classes["hamburger-menu__toggler"] +
    " hamburger-menu__toggler-js " +
    (mobileActive ? classes["active"] : "");
  const menuListClasses =
    classes["menu--mobile"] +
    " " +
    (mobileActive ? classes["menu--mobile-active"] : "");
  const toggleMobileMenu = () => {
    setMobileActive((prevState) => !prevState);
  };

  const destinationText = menuPaths[path] ? (
    <div>
      <NavLink activeClassName={classes.active} to="/">
        Main Page
      </NavLink>
      <span></span>
      <p>{menuPaths[path]}</p>
    </div>
  ) : (
    <h3>Welcome in Loggia Restaurant</h3>
  );
  return (
    <>
      <section className={classes.header}>
        <div className={classes["menu--mobile-container"]}>
          <div className={classes["menu--mobile-nav"]}>
            <NavLink className="h5" to="/">
              <img src={logo} alt="" />
            </NavLink>
            <div onClick={toggleMobileMenu} className={`${menuTogglerClasses}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={classes["menu--mobile-background"]}>
            <ul className={menuListClasses}>
              <li>
                <NavLink
                  activeClassName={classes.active}
                  className="h5"
                  to="/breakfast"
                >
                  Breakfast
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={classes.active}
                  className="h5"
                  to="/lunch"
                >
                  Lunch
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={classes.active}
                  className="h5"
                  to="/menu"
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={classes.active}
                  className="h5"
                  to="/gallery"
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={classes.active}
                  className="h5"
                  to="/comments"
                >
                  References
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={classes.active}
                  className="h5"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes["header--background"]}>
          <div className={classes["blend-background"]}></div>
        </div>

        <div className={classes["menu--desktop"]}>
          <ul>
            <li>
              <NavLink
                activeClassName={classes.active}
                className="h5"
                to="/breakfast"
              >
                Breakfast
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={classes.active}
                className="h5"
                to="/lunch"
              >
                Lunch
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={classes.active}
                className="h5"
                to="/menu"
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink className="h5" to="/">
                <img src={logo} alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={classes.active}
                className="h5"
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={classes.active}
                className="h5"
                to="/comments"
              >
                References
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={classes.active}
                className="h5"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={`${classes["current-destination"]} center`}>
          {destinationText}
          <HeaderCartButton />
        </div>
      </section>
    </>
  );
};

export default Header;
