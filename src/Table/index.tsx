import TableParent from "./Table";
import Td from "./Td";
import Th from "./Th";
import Tr from "./Tr";
import createCompoundComponent from "../internal/createCompoundComponent";

const Table = createCompoundComponent(TableParent, {
  th: Th,
  td: Td,
  tr: Tr,
});

export default Table;
