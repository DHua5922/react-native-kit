import styled from "styled-components/native";
import { rem } from "../utilities/responsive";
import Div from "../Div";
import React, { useContext } from "react";
import TableContext from "./TableContext";

interface Props {
  children?: React.ReactNode;
  border?: boolean;
  [key: string]: any;
}

const Container = styled(Div)<Props>`
  flex: 1;
  padding: ${rem(1)}px;
  border: ${(props: Props) => (props.border ? "1px solid #dee2e6" : "0")};
  font-size: ${rem(1.25)}px;
`;

function Td({ children, ...props }: Props) {
  const { border } = useContext(TableContext);
  return (
    <Container border={border} {...props}>
      {children}
    </Container>
  );
}

export default Td;
