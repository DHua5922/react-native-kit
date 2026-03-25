import Page from "../../functional/Page";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import { pageNames } from "../../../constants";
import React from "react";

function AccordionItemPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.AccordionItem}>
        Event key will be used for expanding or collapsing body
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Accordion } from "react-native-kit";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          [
            "eventKey",
            "string",
            "",
            "Key that will be used for expanding or collapsing body.",
          ],
        ]}
      />
    </Page.Documentation>
  );
}

export default AccordionItemPage;
