import React from "react";
import AccordionItemContext from "./AccordionItemContext";

interface Props {
  children?: React.ReactNode;
  eventKey: string;
  [key: string]: any;
}

function AccordionItem({ children, eventKey, ...props }: Props) {
  return (
    <AccordionItemContext.Provider value={eventKey} {...props}>
      {children}
    </AccordionItemContext.Provider>
  );
}

export default AccordionItem;
