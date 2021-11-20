import classes from "./FlexContainer.module.scss";
const FlexContianer = (props) => {
  return <div className={classes["flex-container"]}>{props.children}</div>;
};

export default FlexContianer;
