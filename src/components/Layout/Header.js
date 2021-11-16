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
    breakfast: "Śniadanie",
    lunch: "Lunch",
    menu: "Menu",
    gallery: "Galeria",
    comments: "Opinie",
    contact: "Kontakt",
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
        Strona główna
      </NavLink>
      <span></span>
      <p>{menuPaths[path]}</p>
    </div>
  ) : (
    <h3>Witaj w naszej restauracji</h3>
  );
  return (
    <>
      <section className={classes.header}>
        <div className={classes["menu--mobile-container"]}>
          <div className={classes["menu--mobile-nav"]}>
            <img src={logo} alt="" />
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
                  Śniadanie
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
                  Galeria
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={classes.active}
                  className="h5"
                  to="/comments"
                >
                  Opinie
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={classes.active}
                  className="h5"
                  to="/contact"
                >
                  Kontakt
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
                Śniadanie
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
                Galeria
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={classes.active}
                className="h5"
                to="/comments"
              >
                Opinie
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={classes.active}
                className="h5"
                to="/contact"
              >
                Kontakt
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
