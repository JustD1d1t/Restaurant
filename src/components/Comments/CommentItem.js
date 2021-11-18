import classes from "./CommentItem.module.scss";

const CommentItem = (props) => {
  return (
    <div
      key={props.id}
      className={classes["comment-item"]}
      data-aos="fade-left"
    >
      <div>
        <img src={props.img} alt="" />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.date}</p>
        <p className="mar-10 altClr">{props.name}</p>
        <p className="fw300">{props.comment}</p>
      </div>
    </div>
  );
};

export default CommentItem;
