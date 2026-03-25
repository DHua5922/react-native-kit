import { createContext } from "react";

const DrawerContext = createContext({
  show: false,
  onHide: () => {},
});

export default DrawerContext;
