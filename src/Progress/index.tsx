import ProgressParent from "./Progress";
import ProgressSpinner from "./ProgressSpinner";
import ProgressBar from "./ProgressBar";
import ProgressText from "./ProgressText";

interface Progress extends React.FC<any> {
  Spinner: typeof ProgressSpinner;
  Bar: typeof ProgressBar;
  Text: typeof ProgressText;
}

const Progress = ProgressParent as unknown as Progress;
Progress.Spinner = ProgressSpinner;
Progress.Bar = ProgressBar;
Progress.Text = ProgressText;

export default Progress;
