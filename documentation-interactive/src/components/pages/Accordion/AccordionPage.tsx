import { Accordion } from "react-native-kit";
import Page from "../../functional/Page";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import { packageName, pageNames } from "../../../constants";
import React from "react";

const code = `function Example() {
  return (
    <Accordion activeKeys={["1"]}>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <Accordion.Title>Header 1</Accordion.Title>
          <Accordion.Toggle />
        </Accordion.Header>
        <Accordion.Body>Body 1</Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <Accordion.Title>Header 2</Accordion.Title>
          <Accordion.Toggle />
        </Accordion.Header>
        <Accordion.Body>Body 2</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}`;

function AccordionPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.Accordion}>
        Build vertically collapsing accordions.
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Accordion } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Accordion }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          [
            "activeKeys",
            "string[]",
            "[]",
            "The current active key that corresponds to the currently expanded card",
          ],
          [
            "onSelect",
            <Code.Sample>{`(eventKey: string) => void`}</Code.Sample>,
            "",
            "Callback fired when the active item changes.",
          ],
        ]}
      />
    </Page.Documentation>
  );
}

export default AccordionPage;
