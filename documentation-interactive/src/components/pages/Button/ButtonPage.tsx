import Page from "../../functional/Page";
import { Button, Row, Text } from "react-native-kit";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import { packageName, pageNames } from "../../../constants";
import React from "react";

const code = `function Example() {
  const style = { marginLeft: 4, marginRight: 4 };

  const gapStyle = { marginBottom: 16 };

  return (
    <>
        <Button disabled fullWidth style={gapStyle}>
          Full Width And Disabled
        </Button>

        <Row style={gapStyle}>
          <Button style={{ marginRight: style.marginRight }} type="primary">Primary</Button>
          <Button style={style} type="success">Success</Button>
          <Button style={style} type="danger">Danger</Button>
          <Button style={style} type="warning">Warning</Button>
          <Button style={style} type="transparent">Transparent</Button>
          <Button style={style} type="light">Light</Button>
          <Button style={style} type="dark">Dark</Button>
          <Button style={{ marginLeft: style.marginLeft }} type="info">Info</Button>
        </Row>

        <Row>
          <Button style={{ marginRight: style.marginRight }} type="outline-primary">Primary</Button>
          <Button style={style} type="outline-success">Success</Button>
          <Button style={style} type="outline-danger">Danger</Button>
          <Button style={style} type="outline-warning">Warning</Button>
          <Button style={style} type="outline-light">Light</Button>
          <Button style={style} type="outline-dark">Dark</Button>
          <Button style={{ marginLeft: style.marginLeft }} type="outline-info">Info</Button>
        </Row>
    </>
  );
}`;

function ButtonPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.Button}>
        Can be text, icon, or both.
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Button } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Button, Row, Text }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          [
            "type",
            "primary | success | danger | warning | transparent | light | dark | info | outline-primary | outline-success | outline-danger | outline-warning | outline-light | outline-dark | outline-info",
            "primary",
            "Type of button",
          ],
          [
            "fullWidth",
            "boolean",
            "false",
            "Make button width be 100% when true",
          ],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="pressable" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default ButtonPage;
