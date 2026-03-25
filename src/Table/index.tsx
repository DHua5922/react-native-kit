import TableParent from "./Table";
import Td from "./Td";
import Th from "./Th";
import Tr from "./Tr";

interface Table extends React.FC<any> {
  th: typeof Th;
  td: typeof Td;
  tr: typeof Tr;
}

const Table = TableParent as unknown as Table;
Table.th = Th;
Table.td = Td;
Table.tr = Tr;

export default Table;
