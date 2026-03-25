import React from "react";
import Div from "../Div";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
}

function PaginationLast({ children, ...props }: Props) {
  return <Div {...props}>{children || ">>"}</Div>;
}

export default PaginationLast;
