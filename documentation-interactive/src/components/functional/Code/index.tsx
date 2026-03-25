import CodeParent from "./Code";
import CodeEditor from "./CodeEditor";
import SampleCode from "./SampleCode";

interface Code extends React.FC<any> {
  Editor: typeof CodeEditor;
  Sample: typeof SampleCode;
}

const Code = CodeParent as unknown as Code;
Code.Editor = CodeEditor;
Code.Sample = SampleCode;

export default Code;
