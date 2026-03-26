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
import createCompoundComponent from "../internal/createCompoundComponent";

type InputCompound = typeof InputParent & {
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
};

const Input: InputCompound = createCompoundComponent(InputParent, {
  Switch: Switch,
  Dropdown: DropdownInput,
  Radio: Radio,
  Search: SearchInput,
  Select: SelectInput,
  Text: TextInput,
  Checkbox: Checkbox,
  Date: DateInput,
  Number: NumberInput,
  TextArea: TextAreaInput,
});

export default Input;
