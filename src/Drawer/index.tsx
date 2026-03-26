import DrawerParent from "./Drawer";
import DrawerBody from "./DrawerBody";
import DrawerHeader from "./DrawerHeader";
import DrawerToggle from "./DrawerToggle";
import createCompoundComponent from "../internal/createCompoundComponent";

const Drawer = createCompoundComponent(DrawerParent, {
  Header: DrawerHeader,
  Body: DrawerBody,
  Toggle: DrawerToggle,
});

export default Drawer;
