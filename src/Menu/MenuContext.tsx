import { createContext } from "react";

interface DefaultValue {
  showMenu: boolean;
  onShowMenu: () => void;
  onHideMenu: () => void;
  offsetMenuPosVertical: number;
  offsetMenuPosHorizontal: number;
  menuPos: {
    top: string;
    left: string;
  };
  setMenuPos: (position: { top: string; left: string }) => void;
}

const MenuContext = createContext<DefaultValue | null>(null);

export default MenuContext;
