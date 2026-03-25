import Page from "../../functional/Page";
import { Card } from "react-native-kit";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import { packageName, pageNames } from "../../../constants";
import React from "react";

const code = `function Example() {
  return (
    <Card>
        <Card.Header>Card Header</Card.Header>

        <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Subtitle>Subtitle</Card.Subtitle>
        </Card.Body>
    </Card>
  );
}`;

function CardPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.Card} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Card } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Card }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection>
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="div" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default CardPage;
