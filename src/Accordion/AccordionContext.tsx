import { createContext } from "react";

interface DefaultValue {
  activeKeys: string[];
  onSelect: (eventKey: string) => void;
  [key: string]: any;
}

const AccordionContext = createContext({
  activeKeys: [],
  onSelect: () => {},
} as DefaultValue);

export default AccordionContext;
