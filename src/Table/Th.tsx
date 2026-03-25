import Td from "./Td";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

function Th({ children, ...props }: Props) {
  return (
    <Td bold {...props}>
      {children}
    </Td>
  );
}

export default Th;
