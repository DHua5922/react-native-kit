import FormParent from "./Form";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";

interface Form extends React.FC<any> {
  Button: typeof FormButton;
  Input: typeof FormInput;
  Label: typeof FormLabel;
}

const Form = FormParent as unknown as Form;
Form.Button = FormButton;
Form.Input = FormInput;
Form.Label = FormLabel;

export default Form;
