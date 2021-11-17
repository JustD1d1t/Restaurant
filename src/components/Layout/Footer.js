import classes from "./Footer.module.scss";
import WidthContainer from "../Layout/WidthContainer";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <section className={classes.footer}>
      <WidthContainer>
        <div className={classes["footer__container"]}>
          <div className={classes["footer__logo"]}>
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className={classes["footer__contact"]}>
            <p className="h3">Zadzwoń</p>
            <a href="tel:+48777888999">777-888-999</a>
          </div>
          <div className={classes["footer__address"]}>
            <p>Restauracja Loggia</p>
            <p>ul.Zagadkowa 22</p>
            <p>12-123 Zagadkowo</p>
            <p>
              E-mail: <a href="mailto:test@example.com">test@example.com</a>
            </p>
          </div>
        </div>
      </WidthContainer>
    </section>
  );
};

export default Footer;
