import homeIcon from "../../assets/svg/home.svg";
import classes from "./ContactDetails.module.scss";
const ContactDetails = () => {
  return (
    <div className={classes["contact-details"]}>
      <h3>Restaurant Loggia</h3>

      <p className="fw300">
        <img src={homeIcon} alt="" />
        &nbsp;ul.Zagadkowa 22
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;12-123 Zagadkowo
      </p>
      <div className="mar-20">
        <h3>Telefon</h3>
        <a href="tel:+48777888999" className="h4">
          777-888-999
        </a>
      </div>
      <div className="mar-20">
        <h3>E-mail</h3>
        <a href="mailto:test@example.com" className="h4">
          test@example.com
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
