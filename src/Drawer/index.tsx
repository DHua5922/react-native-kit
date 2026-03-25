import DrawerParent from "./Drawer";
import DrawerBody from "./DrawerBody";
import DrawerHeader from "./DrawerHeader";
import DrawerToggle from "./DrawerToggle";

interface Drawer extends React.FC<any> {
  Header: typeof DrawerHeader;
  Body: typeof DrawerBody;
  Toggle: typeof DrawerToggle;
}

const Drawer = DrawerParent as Drawer;
Drawer.Header = DrawerHeader;
Drawer.Body = DrawerBody;
Drawer.Toggle = DrawerToggle;

export default Drawer;
