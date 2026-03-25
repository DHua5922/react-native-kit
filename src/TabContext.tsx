import { createContext } from "react";

interface DefaultValue {
  activeKey: string;
  onSelect: (eventKey: string) => void;
}

const TabContext = createContext({
  activeKey: "",
  onSelect: () => {},
} as DefaultValue);

export default TabContext;
