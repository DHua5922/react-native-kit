import MenuParent from "./Menu";
import MenuItem from "./MenuItem";
import MenuContent from "./MenuContent";
import MenuToggle from "./MenuToggle";
import createCompoundComponent from "../internal/createCompoundComponent";

const Menu = createCompoundComponent(MenuParent, {
  Content: MenuContent,
  Item: MenuItem,
  Toggle: MenuToggle,
});

export default Menu;
