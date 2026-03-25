import Page from "../functional/Page";
import { Row, Col, Text } from "react-native-kit";
import Code from "../functional/Code";
import Documentation from "../functional/Documentation";
import Link from "../functional/Link";
import { packageName, pageNames } from "../../constants";
import React from "react";

const code = `function Example() {
  return (
    <Row>
        <Col xs={12} md={6} lg={4}>Column 1</Col>
        <Col xs={12} md={6} lg={4}>Column 2</Col>
        <Col xs={12} md={6} lg={4}>Column 3</Col>
    </Row>
  );
}`;

function ColPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.Col}>
        <Text>
          Column in row. This needs to be nested in <Link component="row" />{" "}
          component.
        </Text>
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Col } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Row, Col }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          [
            "xs",
            "number (0 ≤ x ≤ 12)",
            "12",
            "The number of columns to span on extra small devices (<576px)",
          ],
          [
            "sm",
            "number (0 ≤ x ≤ 12)",
            "0",
            "The number of columns to span on small devices (≥576px)",
          ],
          [
            "md",
            "number (0 ≤ x ≤ 12)",
            "0",
            "The number of columns to span on medium devices (≥768px)",
          ],
          [
            "lg",
            "number (0 ≤ x ≤ 12)",
            "0",
            "The number of columns to span on large devices (≥992px)",
          ],
          [
            "xl",
            "number (0 ≤ x ≤ 12)",
            "0",
            "The number of columns to span on extra large devices (≥1200px)",
          ],
          [
            "xxl",
            "number (0 ≤ x ≤ 12)",
            "0",
            "The number of columns to span on extra extra large devices (≥1400px)",
          ],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="div" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default ColPage;
