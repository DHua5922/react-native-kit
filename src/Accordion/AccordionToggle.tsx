import { AntDesign } from "@expo/vector-icons";
import AccordionContext from "./AccordionContext";
import React, { useContext } from "react";
import { rem } from "../utilities/responsive";
import AccordionItemContext from "./AccordionItemContext";

function AccordionToggle(props: any) {
  const { activeKeys } = useContext(AccordionContext);
  const eventKey = useContext(AccordionItemContext);
  return (
    <AntDesign
      name={activeKeys.find((key: string) => key === eventKey) ? "up" : "down"}
      size={rem(1)}
      color="#212529"
      {...props}
    />
  );
}

export default AccordionToggle;
