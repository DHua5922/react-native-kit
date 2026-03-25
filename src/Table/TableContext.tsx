import { createContext } from "react";

interface DefaultValue {
  border: boolean;
  striped: boolean;
  hover: boolean;
}

const TableContext = createContext<DefaultValue>({
  border: true,
  striped: true,
  hover: true,
});

export default TableContext;
