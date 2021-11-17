import classes from "./LunchDetails.module.scss";
import LunchImg from "../../assets/img/Lunch.jpg";
const LunchDetails = () => {
  return (
    <section className={`${classes["lunch-details"]} mar-20`}>
      <h2 className="h3 text-center altClr">
        Delicious lunch in center of Warsaw
      </h2>
      <p className="mar-10 fw300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
        corrupti eligendi asperiores dolores, dolore, dolor quam voluptatum
        molestiae <b>dignissimos nesciunt porro.</b> Alias saepe earum delectus
        cumque dolorem.
      </p>
      <p className="mar-10 fw300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, porro.
      </p>
      <div className="mar-20">
        <div>
          <p className="h5">17-12-2021 Sobota</p>
          <p className="mar-10">
            <b>Soup</b>
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p className="mar-10">
            <b>Main course</b>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            veniam, atque eligendi temporibus dicta eaque.
          </p>
          <p className="mar-10">
            <b>or</b>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus qui
            maxime ipsa?
          </p>
        </div>
        <img src={LunchImg} alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tenetur
        labore odit deserunt alias sunt?
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
    </section>
  );
};

export default LunchDetails;
