import { Feather } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { rem } from "../utilities/responsive";
import { Pressable } from "react-native";
import Row from "../Row";
import Popup from "../Popup";
import Menu from "./Menu";

interface Props {
  Icon?: any;
  IconName?: string;
  children?: React.ReactNode;
  Toggle?: React.ReactNode;
  showMenu?: boolean;
  onShowMenu: () => void;
  onHideMenu: () => void;
  offsetMenuPosVertical?: number;
  offsetMenuPosHorizontal?: number;
  [key: string]: any;
}

function MenuToggle({
  Icon,
  IconName = "more-vertical",
  children,
  Toggle,
  showMenu,
  onShowMenu,
  onHideMenu,
  offsetMenuPosVertical,
  offsetMenuPosHorizontal,
  ...props
}: Props) {
  const IconComponent = Icon || Feather;
  const [menuPos, setMenuPos] = useState({
    top: "auto",
    left: "auto",
  });
  const buttonRef = useRef(null);

  return (
    <>
      <Row>
        <Pressable
          ref={buttonRef}
          onPress={() => {
            onShowMenu && onShowMenu();
            (buttonRef.current as any)?.measure(
              (
                x: number,
                y: number,
                width: number,
                height: number,
                pageX: number,
                pageY: number
              ) =>
                setMenuPos({
                  top: `${pageY + height + (offsetMenuPosVertical || 0)}px`,
                  left: `${pageX + (offsetMenuPosHorizontal || 0)}px`,
                })
            );
          }}
        >
          {Toggle || (
            <IconComponent
              name={IconName}
              color="#000000"
              size={rem(2)}
              {...props}
            />
          )}
        </Pressable>
      </Row>

      <Popup
        {...menuPos}
        visible={showMenu}
        onShow={onShowMenu}
        onHide={onHideMenu}
      >
        <Menu>
          {React.Children.map(
            children as React.ReactElement<any>[],
            (child: React.ReactElement<any>) =>
              React.cloneElement(child, {
                ...child.props,
                onPress: (event: any) => {
                  if (child.props.onPress) {
                    child.props.onPress(event);
                    onHideMenu && onHideMenu();
                  }
                },
              })
          )}
        </Menu>
      </Popup>
    </>
  );
}

export default MenuToggle;
