import Page from "../../functional/Page";
import { Button, Div } from "react-native-kit";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import { packageName, pageNames } from "../../../constants";
import React from "react";

const code = `function Example() {
  return (
    <Div>
       <Button.Close />
       <Button.Close>Close</Button.Close>
    </Div>
  );
}`;

function CloseButtonPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.CloseButton}>
        Button for closing.
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Button } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Button, Div }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection>
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="button" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default CloseButtonPage;
