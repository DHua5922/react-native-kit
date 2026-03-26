import FormParent from "./Form";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";
import createCompoundComponent from "../internal/createCompoundComponent";

const Form = createCompoundComponent(FormParent, {
  Button: FormButton,
  Input: FormInput,
  Label: FormLabel,
});

export default Form;
