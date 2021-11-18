import person from "../../assets/img/person.png";
import classes from "./CommentsList.module.scss";
import CommentItem from "./CommentItem";
const DUMMY_COMMENTS = [
  {
    id: "c1",
    name: "Marco Andrea",
    title: "Lorem, ipsum.",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo hic provident magni tempora numquam velit, eaque fuga sunt quasi maiores accusantium ea reprehenderit ut.",
    date: "12-11-2021",
    img: person,
  },
  {
    id: "c2",
    name: "Anna Bocceli",
    title: "Lorem, ipsum dolor.",
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem tempora placeat nemo maxime earum quas ullam natus eligendi facilis aut, quam reprehenderit blanditiis illum magnam dolorum ea. Facere at culpa sed aliquid minus? Explicabo, obcaecati.",
    date: "07-11-2021",
    img: person,
  },
  {
    id: "c3",
    name: "Geroge Hewitt",
    title: "Lorem ipsum dolor sit amet.",
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nulla ad adipisci quasi deleniti sit voluptatibus explicabo inventore autem possimus nam illo optio quae suscipit, consequuntur repellendus aliquam est reprehenderit ea iure sed expedita placeat! Excepturi, doloremque enim. Expedita, iusto minus ab nihil earum similique!",
    date: "15-10-2021",
    img: person,
  },
  {
    id: "c4",
    name: "Lisa Kowalska",
    title: "Lorem, ipsum.",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt beatae earum dignissimos id voluptatem ex delectus illum enim provident quas.",
    date: "07-10-2021",
    img: person,
  },
  {
    id: "c5",
    name: "Matthew McGeady",
    title: "Lorem, ipsum.",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati consectetur harum at facilis ipsa. Vitae illum cupiditate maiores! Amet ipsam veritatis aliquid laboriosam fugit a voluptatibus culpa voluptatem quibusdam corporis ipsum, ullam quas officiis recusandae dolore deserunt. Nesciunt, aliquam, magni, ab quidem numquam voluptate dicta omnis consequatur ipsum explicabo debitis.",
    date: "01-10-2021",
    img: person,
  },
  {
    id: "c6",
    name: "Andrew Cash",
    title: "Lorem, ipsum.",
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum repudiandae ex explicabo nam illo adipisci aperiam alias, molestias similique eaque nulla quidem vitae voluptatum facere.",
    date: "28-09-2021",
    img: person,
  },
];
const CommentsList = () => {
  const comments = DUMMY_COMMENTS.map((item) => {
    return (
      <CommentItem
        key={item.id}
        img={item.img}
        title={item.title}
        date={item.date}
        name={item.name}
        comment={item.comment}
      />
    );
  });
  return (
    <section className={classes.comments}>
      <h2 class="h3 text-center mar-20">Komentarze</h2>
      <p className="mar-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        laboriosam architecto, provident quos possimus culpa perferendis
        exercitationem hic ipsum recusandae, facere obcaecati quod, sint dolor.
        Asperiores facere veniam mollitia quia ipsam laudantium? Ipsa, assumenda
        numquam!
      </p>
      {comments}
    </section>
  );
};

export default CommentsList;
