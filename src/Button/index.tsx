import React from "react";
import ButtonParent from "./Button";
import CloseButton from "./CloseButton";

interface Button extends React.FC<any> {
  Close: typeof CloseButton;
}

const Button = ButtonParent as Button;
Button.Close = CloseButton;

export default Button;
