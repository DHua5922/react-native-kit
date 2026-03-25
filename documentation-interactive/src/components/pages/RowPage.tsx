import Page from "../functional/Page";
import { Div, Text, Row } from "react-native-kit";
import Code from "../functional/Code";
import Documentation from "../functional/Documentation";
import Link from "../functional/Link";
import { packageName, pageNames } from "../../constants";
import React from "react";

const code = `function Example() {
  return (
    <Row>
        <Div type="danger"><Text>View 1</Text></Div>
        <Div type="success"><Text>View 2</Text></Div>
    </Row>
  );
}`;

function RowPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.Row}>
        Show children horizontally.
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Row } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Div, Text, Row }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection>
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="div" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default RowPage;
