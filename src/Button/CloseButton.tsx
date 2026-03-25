import Button from "./Button";
import React from "react";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

function CloseButton({ children, ...props }: Props) {
  return (
    <Button type="transparent" {...props}>
      {children || "X"}
    </Button>
  );
}

export default CloseButton;
