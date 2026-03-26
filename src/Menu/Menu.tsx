import React, { useMemo, useState } from "react";
import MenuContext from "./MenuContext";
import MenuContent from "./MenuContent";
import MenuToggle from "./MenuToggle";

interface Props {
  children?: React.ReactNode;
  showMenu?: boolean;
  defaultShowMenu?: boolean;
  onShowMenu?: () => void;
  onHideMenu?: () => void;
  offsetMenuPosVertical?: number;
  offsetMenuPosHorizontal?: number;
}

function hasCompoundChildren(children: React.ReactNode) {
  return React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) &&
      (child.type === MenuToggle || child.type === MenuContent),
  );
}

function Menu({
  children,
  showMenu,
  defaultShowMenu = false,
  onShowMenu,
  onHideMenu,
  offsetMenuPosVertical = 0,
  offsetMenuPosHorizontal = 0,
  ...props
}: Props) {
  const [internalShowMenu, setInternalShowMenu] = useState(defaultShowMenu);
  const [menuPos, setMenuPos] = useState({
    top: "auto",
    left: "auto",
  });
  const isControlled = typeof showMenu === "boolean";
  const visible = isControlled ? showMenu : internalShowMenu;

  const contextValue = useMemo(
    () => ({
      showMenu: visible,
      onShowMenu: () => {
        if (!isControlled) {
          setInternalShowMenu(true);
        }

        onShowMenu && onShowMenu();
      },
      onHideMenu: () => {
        if (!isControlled) {
          setInternalShowMenu(false);
        }

        onHideMenu && onHideMenu();
      },
      offsetMenuPosVertical,
      offsetMenuPosHorizontal,
      menuPos,
      setMenuPos,
    }),
    [
      isControlled,
      menuPos,
      offsetMenuPosHorizontal,
      offsetMenuPosVertical,
      onHideMenu,
      onShowMenu,
      visible,
    ],
  );

  return (
    <MenuContext.Provider value={contextValue}>
      {hasCompoundChildren(children) ? (
        children
      ) : (
        <MenuContent {...props}>{children}</MenuContent>
      )}
    </MenuContext.Provider>
  );
}

export default Menu;
