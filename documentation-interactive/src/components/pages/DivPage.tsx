import Page from "../functional/Page";
import { Div, Text } from "react-native-kit";
import Code from "../functional/Code";
import Documentation from "../functional/Documentation";
import Link from "../functional/Link";
import { packageName, pageNames } from "../../constants";
import React from "react";

const code = `function Example() {
  return (
    <Div type="success">
      Hello World!
      <Div>Div</Div>
      <Text underline bold>Text <Text>Embedded Text</Text></Text>
      <Div>Div <Text>Text</Text> Div</Div>
    </Div>
  );
}`;

function DivPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.Div}>
        Nest components or text.
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Div } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Div, Text }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          [
            "type",
            "success | danger | warning | info | default",
            "default",
            "Type of text",
          ],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="textCN" /> or{" "}
          <Link type="info" component="view" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default DivPage;
