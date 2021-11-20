import ContactForm from "../components/Contact/ContactForm";
import IntroductionContact from "../components/Contact/IntroductionContact";
import WidthContianer from "../components/Layout/WidthContainer";
import FlexContianer from "../components/Layout/FlexContainer";
import ContactDetails from "../components/Contact/ContactDetails";
const Contact = (props) => {
  return (
    <WidthContianer>
      <section className="mar-20">
        <IntroductionContact />
        <div className="mar-20">
          <FlexContianer>
            <ContactDetails />
            <ContactForm />
          </FlexContianer>
        </div>
      </section>
    </WidthContianer>
  );
};

export default Contact;
