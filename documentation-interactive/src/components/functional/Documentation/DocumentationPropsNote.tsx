import { Alert, Text } from "react-native-kit";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

function DocumentationPropsNote({ children, ...props }: Props) {
  return (
    <Alert type="info" {...props}>
      <Text type="info">{children}</Text>
    </Alert>
  );
}

export default DocumentationPropsNote;
