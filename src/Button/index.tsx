import ButtonParent from "./Button";
import CloseButton from "./CloseButton";
import createCompoundComponent from "../internal/createCompoundComponent";

const Button = createCompoundComponent(ButtonParent, {
  Close: CloseButton,
});

export default Button;
