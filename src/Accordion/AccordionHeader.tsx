import styled from "styled-components/native";
import Row from "../Row";
import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";
import AccordionItemContext from "./AccordionItemContext";
import { Pressable } from "react-native";

interface Props {
  children: React.ReactNode;
  [key: string]: any;
}

const Container = styled(Row)`
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #dee2e6;
`;

function AccordionHeader({ children, ...props }: Props) {
  const { onSelect } = useContext(AccordionContext);
  const eventKey = useContext(AccordionItemContext);

  return (
    <Pressable onPress={() => onSelect(eventKey)}>
      <Container {...props}>{children}</Container>
    </Pressable>
  );
}

export default AccordionHeader;
