import { ActivityIndicator } from "react-native";
import Center from "../Center";
import React from "react";
import styled from "styled-components/native";
import ProgressText from "./ProgressText";
import Div from "../Div";

interface Props {
  children?: React.ReactNode;
  color?: string;
  [key: string]: any;
}

const SCenter = styled(Center)`
  margin-top: 12px;
`;

function ProgressSpinner({ children, color, ...props }: Props) {
  return (
    <Div {...props}>
      <ActivityIndicator size="large" color={color} />
      {children && (
        <SCenter>
          <ProgressText color={color}>{children}</ProgressText>
        </SCenter>
      )}
    </Div>
  );
}

export default ProgressSpinner;
