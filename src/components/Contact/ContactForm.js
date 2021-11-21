import React from "react";
import { Formik, Field } from "formik";
import classes from "./ContactForm.module.scss";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Wymagany adres e-mail";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Nieprawidłowy adres e-mail";
  }
  return error;
}
function validateTitle(value) {
  let error;
  if (!value) {
    error = "Wymagany tytuł";
  }
  return error;
}
function validateName(value) {
  let error;
  if (!value) {
    error = "Wymagane dane";
  } else if (value.length < 6) {
    error = "Wprowadzone dane są za krótkie. Minimum 6 znaków";
  }
  return error;
}
function validateText(value) {
  let error;
  if (!value) {
    error = "Wymagana treść";
  } else if (value.length < 30) {
    error = "Wprowadzone dane są za krótkie. Minimum 30 znaków";
  }
  return error;
}

const ContactForm = () => (
  <div>
    <h1>Contact us!</h1>
    <Formik
      initialValues={{ email: "", name: "", tel: "", title: "", text: "" }}
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
          <div className={classes.fields}>
            <div className={classes.labels}>
              <label>
                E-mail *
                <Field name="email" validate={validateEmail} />
                {errors.email && touched.email && (
                  <span className={classes.required}>{errors.email}</span>
                )}
              </label>
              <label>
                Tytuł *
                <Field name="title" validate={validateTitle} />
                {errors.title && touched.title && (
                  <span className={classes.required}>{errors.title}</span>
                )}
              </label>
              <label>
                Imię i nazwisko *
                <Field name="name" validate={validateName} />
                {errors.name && touched.name && (
                  <span className={classes.required}>{errors.name}</span>
                )}
              </label>
            </div>
            <div className={classes.textarea}>
              <label>
                Treść wiadomości *
                <Field name="text" validate={validateText} as="textarea" />
                {errors.text && touched.text && (
                  <span className={classes.required}>{errors.text}</span>
                )}
              </label>
            </div>
          </div>

          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting} className="fw600">
            Wyślij
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default ContactForm;
