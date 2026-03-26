import ProgressParent from "./Progress";
import ProgressSpinner from "./ProgressSpinner";
import ProgressBar from "./ProgressBar";
import ProgressText from "./ProgressText";
import createCompoundComponent from "../internal/createCompoundComponent";

const Progress = createCompoundComponent(ProgressParent, {
  Spinner: ProgressSpinner,
  Bar: ProgressBar,
  Text: ProgressText,
});

export default Progress;
