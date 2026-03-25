import Page from "../functional/Page";
import { Div, Center } from "react-native-kit";
import Code from "../functional/Code";
import Documentation from "../functional/Documentation";
import Link from "../functional/Link";
import { packageName, pageNames } from "../../constants";
import React from "react";

const code = `function Example() {
  return (
    <Div>
        <Center type="success">Default Center</Center>
        <Center type="danger" style={{ height: 500 }}>Center With Given Height</Center>
    </Div>
  );
}`;

function CenterPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.Center}>
        Centers children horizontally and vertically.
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Center } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Div, Center }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection>
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="div" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default CenterPage;
