import React, { useState } from "react";
import AccordionContext from "./AccordionContext";

interface Props {
  activeKeys?: string[];
  onSelect?: (eventKey: string) => void;
  children?: React.ReactNode;
  [key: string]: any;
}

const Accordion = ({ activeKeys, onSelect, children, ...props }: Props) => {
  const [keys, setActiveKeys] = useState(activeKeys || []);
  return (
    <AccordionContext.Provider
      value={{
        activeKeys: keys,
        onSelect:
          onSelect ||
          ((eventKey: string) =>
            setActiveKeys(
              keys.find((key: string) => key === eventKey)
                ? keys.filter((key: string) => key !== eventKey)
                : [...keys, eventKey]
            )),
      }}
      {...props}
    >
      {children}
    </AccordionContext.Provider>
  );
};

export default Accordion;
