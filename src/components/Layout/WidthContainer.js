import classes from "./WidthContainer.module.scss";
const Container = (props) => {
  const componentClasses = `${classes.container} ${
    props.className ? props.className : ""
  }`;
  return <section className={componentClasses}>{props.children}</section>;
};

export default Container;
