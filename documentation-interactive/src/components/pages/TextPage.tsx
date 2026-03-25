import Page from "../functional/Page";
import { Text, Row } from "react-native-kit";
import Code from "../functional/Code";
import Documentation from "../functional/Documentation";
import Link from "../functional/Link";
import { packageName, pageNames } from "../../constants";
import React from "react";

const code = `function Example() {
  return (
    <Row>
        <Text>normal </Text>
        <Text type="success">success </Text>
        <Text type="danger">danger </Text>
        <Text type="warning">warning </Text>
        <Text type="info">info </Text>
        <Text bold>bold </Text>
        <Text underline>underlined</Text>
    </Row>
  );
}`;

function TextPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.Text}>
        Show text.
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Text } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Text, Row }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          [
            "type",
            "success | danger | warning | info | default",
            "default",
            "Type of text",
          ],
          ["underline", "boolean", "", "Underline text"],
          ["bold", "boolean", "", "Bold text"],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="text" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default TextPage;
