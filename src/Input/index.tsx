import InputParent from "./Input";
import DropdownInput from "./SelectInput";
import Switch from "./Switch";
import Radio from "./Radio";
import SearchInput from "./SearchInput";
import SelectInput from "./SelectInput";
import Checkbox from "./Checkbox";
import DateInput from "./DateInput";
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import TextAreaInput from "./TextAreaInput";

interface Input extends React.FC<any> {
  Switch: typeof Switch;
  Dropdown: typeof DropdownInput;
  Radio: typeof Radio;
  Search: typeof SearchInput;
  Select: typeof SelectInput;
  Text: typeof TextInput;
  Checkbox: typeof Checkbox;
  Date: typeof DateInput;
  Number: typeof NumberInput;
  TextArea: typeof TextAreaInput;
}

const Input = InputParent as unknown as Input;
Input.Switch = Switch;
Input.Dropdown = DropdownInput;
Input.Radio = Radio;
Input.Search = SearchInput;
Input.Select = SelectInput;
Input.Text = TextInput;
Input.Checkbox = Checkbox;
Input.Date = DateInput;
Input.Number = NumberInput;
Input.TextArea = TextAreaInput;

export default Input;
