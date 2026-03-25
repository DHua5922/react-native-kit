import styled from "styled-components/native";
import Div from "../Div";
import TableContext from "./TableContext";
import React from "react";

interface Props {
  children?: React.ReactNode;
  striped?: boolean;
  border?: boolean;
  hover?: boolean;
  [key: string]: any;
}

const Container = styled(Div)`
  width: 100%;
`;

function Table({
  children,
  striped = true,
  border = true,
  hover = true,
  ...props
}: Props) {
  return (
    <TableContext.Provider
      value={{
        striped,
        hover,
        border,
      }}
    >
      <Container {...props}>{children}</Container>
    </TableContext.Provider>
  );
}

export default Table;
