import styled from "rn-css";
import Row from "../Row";
import React, { useContext } from "react";
import TableContext from "./TableContext";

interface Props {
  children?: React.ReactNode;
  striped?: boolean;
  hover?: boolean;
  [key: string]: any;
}

interface ContainerProps {
  striped: boolean;
  hover: boolean;
}

const Container = styled(Row)<ContainerProps>`
  width: 100%;
  background-color: ${(props: ContainerProps) => props.striped && "#f2f2f2"};

  &:hover {
    background-color: ${(props: ContainerProps) => props.hover && "#EDEDED"};
  }
`;

function Tr({ children, striped = false, ...props }: Props) {
  const context = useContext(TableContext);
  return (
    <Container
      striped={context.striped && striped}
      hover={context.hover}
      {...props}
    >
      {children}
    </Container>
  );
}

export default Tr;
