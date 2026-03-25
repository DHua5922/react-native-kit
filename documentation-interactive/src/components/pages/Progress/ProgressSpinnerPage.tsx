import Page from "../../functional/Page";
import { Progress } from "react-native-kit";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import React, { useState } from "react";
import { packageName, pageNames } from "../../../constants";

const code = `function Example() {
    const [progress, setProgress] = useState(0);
    setTimeout(() => setProgress(progress + 1), 500);
    return (
        <Progress.Spinner color="blue">
            {progress}%
        </Progress.Spinner>
    );
}`;

function ProgressSpinnerPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.ProgressSpinner}>
        Show progress of some activity with a spinner.
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Progress } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Progress, useState }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[["color", "string", "", "Color of progress bar and text."]]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="div" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default ProgressSpinnerPage;
