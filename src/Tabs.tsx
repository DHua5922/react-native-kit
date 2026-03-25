import Div from "./Div";
import Row from "./Row";
import TabContext from "./TabContext";
import React from "react";
import styled from "styled-components/native";

interface Props {
  children?: React.ReactNode;
  activeKey: string;
  onSelect: (eventKey: string) => void;
  [key: string]: any;
}

const SRow = styled(Row)`
  margin-bottom: 8px;
`;

function Tabs({ children, activeKey, onSelect, ...props }: Props) {
  return (
    <TabContext.Provider value={{ activeKey, onSelect }}>
      <Div {...props}>
        <SRow>{children}</SRow>

        {React.Children.map(children, (child) =>
          React.isValidElement(child) && child.props.eventKey === activeKey
            ? child.props.children
            : null
        )}
      </Div>
    </TabContext.Provider>
  );
}

export default Tabs;
