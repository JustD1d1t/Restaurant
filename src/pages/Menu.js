import MenuItems from "../components/Menu/MenuItems";
import WidthContainer from "../components/Layout/WidthContainer";
const Menu = (props) => {
  return (
    <div>
      <WidthContainer className="align-center">
        <MenuItems></MenuItems>
      </WidthContainer>
    </div>
  );
};

export default Menu;
