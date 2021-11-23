import MenuItem from "./MenuItem";
const DUMMY_MEALS = {
  breakfast: [
    {
      id: "b1",
      title: "Fruit oatmeal",
      description: "oats with nuts and fresh fruits",
      price: 17,
    },
    {
      id: "b2",
      title: "The all american",
      description:
        "Three eggs any style, thre grilled sausages, two strips of bacon, hash browns and toast",
      price: 15,
    },
    {
      id: "b3",
      title: "Omelettes",
      description:
        "thre egg omelette, served with hash browns and toas. Consists of: mushrooms, bacon, ham, cheese, onion and green peppers",
      price: 16,
    },
  ],
  starters: [
    {
      id: "s1",
      title: "Nachos Muchacos",
      description:
        "tortilla chips with ceese, beans and bacon, poured over with salsa, sour cream and guacamole",
      price: 21,
    },
    {
      id: "s2",
      title: "Mexican taco",
      description: "3 tacos with fresh salsa and cilatro (beef or chicken)",
      price: 29,
    },
    {
      id: "s3",
      title: "Cripsy calamari",
      description:
        "golden calamari served with fresh salsa and chipotle aioli sauce",
      price: 16,
    },
  ],
  burgers: [
    {
      id: "bu1",
      title: "Classic american burger",
      description: "100% prime beef burger",
      price: 33,
    },
    {
      id: "bu2",
      title: "Kimchi burger",
      description:
        "class burger 100% beef with spicy cabbage kimchi, mayonnaise and sriracha sauce",
      price: 35,
    },
    {
      id: "bu3",
      title: "Big Texas BBQ Burger",
      description: "served with ceheese, bacon and bbq sauce",
      price: 35,
    },
  ],
  fireGrill: [
    {
      id: "fg1",
      title: "Pork souvlaki",
      description:
        "served with onion, tsatsiki sauce, french fries and Coleslav salad",
      price: 31,
    },
    {
      id: "fg2",
      title: "Chicken supreme",
      description:
        "roast chicken breast with Chipotle sauce and cumin, served with grilled corn on the cob and french fries",
      price: 37,
    },
    {
      id: "fg3",
      title: "New York beef filet",
      description:
        "juicy sirloin steak grilled the way you like it, served with french fries and grilled corn on the cob, herb butter or a sauce of your choice",
      price: 67,
    },
  ],
  iceColdDrinks: [
    {
      id: "icd1",
      title: "Homemade lemonade",
      price: 13,
    },
    {
      id: "icd2",
      title: "Coca cola",
      price: 8,
    },
    {
      id: "icd3",
      title: "Burn",
      price: 11,
    },
  ],
};
const MenuItems = () => {
  const breakfast = DUMMY_MEALS.breakfast.map((meal) => (
    <MenuItem
      key={meal.id}
      id={meal.id}
      title={meal.title}
      description={meal.description}
      price={meal.price}
    />
  ));
  const starters = DUMMY_MEALS.starters.map((meal) => (
    <MenuItem
      key={meal.id}
      id={meal.id}
      title={meal.title}
      description={meal.description}
      price={meal.price}
    />
  ));
  const burgers = DUMMY_MEALS.burgers.map((meal) => (
    <MenuItem
      key={meal.id}
      id={meal.id}
      title={meal.title}
      description={meal.description}
      price={meal.price}
    />
  ));
  const fireGrill = DUMMY_MEALS.fireGrill.map((meal) => (
    <MenuItem
      key={meal.id}
      id={meal.id}
      title={meal.title}
      description={meal.description}
      price={meal.price}
    />
  ));
  const iceColdDrinks = DUMMY_MEALS.iceColdDrinks.map((meal) => (
    <MenuItem
      key={meal.id}
      id={meal.id}
      title={meal.title}
      price={meal.price}
    />
  ));
  return (
    <section>
      <h2 className="text-center mar-20 h2">Menu</h2>
      <div>
        <h3 className="text-center mar-10 h3">Breakfast</h3>
        {breakfast}
        <h3 className="text-center mar-10 h3">Starters</h3>
        {starters}
        <h3 className="text-center mar-10 h3">Burgers</h3>
        {burgers}
        <h3 className="text-center mar-10 h3">Fire Grill</h3>
        {fireGrill}
        <h3 className="text-center mar-10 h3">Ice Cold Drinks</h3>
        {iceColdDrinks}
      </div>
    </section>
  );
};

export default MenuItems;
