import MenuParent from "./Menu";
import MenuItem from "./MenuItem";
import MenuToggle from "./MenuToggle";

interface Menu extends React.FC<any> {
  Item: typeof MenuItem;
  Toggle: typeof MenuToggle;
}

const Menu = MenuParent as unknown as Menu;
Menu.Item = MenuItem;
Menu.Toggle = MenuToggle;

export default Menu;
