import React, { useContext } from "react";
import TabContext from "./TabContext";
import Button from "./Button";
import styled from "styled-components/native";
import { rem } from "./utilities/responsive";

interface Props {
  eventKey: string;
  onPress?: (evt: any) => void;
  title?: React.ReactNode;
  [key: string]: any;
}

interface ContainerProps {
  selected?: boolean;
  disabled?: boolean;
}

const Container = styled(Button)<ContainerProps>`
  border-width: ${(props: ContainerProps) => (props.selected ? "1px" : "0px")};
  border-bottom-width: ${(props: ContainerProps) =>
    props.selected ? "0px" : "1px"};
  border-color: #dee2e6;
  opacity: ${(props: ContainerProps) => (props.disabled ? 0.3 : 1)};
  border-top-left-radius: ${rem(0.375)}px;
  border-top-right-radius: ${rem(0.375)}px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

function Tab({ eventKey, onPress, title, ...props }: Props) {
  const { activeKey, onSelect } = useContext(TabContext);

  return (
    <Container
      type="transparent"
      {...props}
      onPress={(evt: any) => {
        onSelect && onSelect(eventKey);
        onPress && onPress(evt);
      }}
      selected={activeKey === eventKey}
    >
      {title}
    </Container>
  );
}

export default Tab;
