import React from "react";
import { Formik, Field } from "formik";
import classes from "./CartForm.module.scss";
import { useDispatch } from "react-redux";
import { clearOrder } from "../../store/actions/cart";

function validateName(value) {
  let error;
  if (!value) {
    error = "Wymagane dane";
  } else if (value.length < 6) {
    error = "Wprowadzone dane są za krótkie. Minimum 6 znaków";
  } else if (!value.includes(" ")) {
    error = "Podałeś tylko imię lub nazwisko";
  }
  return error;
}
function validateCity(value) {
  let error;
  if (!value) {
    error = "Wymagane dane";
  } else if (value.length < 3) {
    error = "Wprowadzone dane są za krótkie. Minimum 3 znaki";
  }
  return error;
}
function validateAdress(value) {
  let error;
  if (!value) {
    error = "Wymagane dane";
  } else if (value.length < 8) {
    error = "Wprowadzone dane są za krótkie. Minimum 8 znaki";
  }
  return error;
}
function validateMobile(value) {
  let error;
  if (!value) {
    error = "Wymagane dane";
  } else if (!/^\d{9,}$/i.test(value)) {
    error = "Wprowadzony numer jest za krótki. Minimum 9 cyfr";
  }
  return error;
}

const CartForm = () => {
  const dispatch = useDispatch();
  const handleOrder = () => {
    setTimeout(() => {
      dispatch(clearOrder());
    }, 400);
  };
  return (
    <div>
      <h1>Contact us!</h1>
      <Formik
        initialValues={{ name: "", city: "", adress: "", mobile: "" }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert("poprawnie wysłano formularz");
            setSubmitting(false);
            resetForm({});
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <label className={classes["label"]}>
              Imię i nazwisko *
              {errors.name && touched.name && (
                <span className={classes.required}>{errors.name}</span>
              )}
              <Field name="name" validate={validateName} />
            </label>
            <label className={classes["label"]}>
              Miasto *
              <Field name="city" validate={validateCity} />
              {errors.city && touched.city && (
                <span className={classes.required}>{errors.city}</span>
              )}
            </label>
            <label className={classes["label"]}>
              Adres *
              <Field name="adress" validate={validateAdress} />
              {errors.adress && touched.adress && (
                <span className={classes.required}>{errors.adress}</span>
              )}
            </label>
            <label className={classes["label"]}>
              Telefon *
              <Field name="mobile" validate={validateMobile} />
              {errors.mobile && touched.mobile && (
                <span className={classes.required}>{errors.mobile}</span>
              )}
            </label>

            {errors.password && touched.password && errors.password}
            <button
              type="submit"
              disabled={isSubmitting}
              className={classes["button"]}
              onClick={handleOrder}
            >
              Wyślij
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CartForm;
