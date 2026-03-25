import Text from "../Text";
import React from "react";
import styled from "styled-components/native";

interface Props {
  children?: React.ReactNode;
  required?: boolean;
  [key: string]: any;
}

const RequiredText = styled(Text)`
  color: red;
`;

function FormLabel({ children, required, ...props }: Props) {
  return (
    <Text {...props}>
      {children}
      {required && <RequiredText> *</RequiredText>}
    </Text>
  );
}

export default FormLabel;
