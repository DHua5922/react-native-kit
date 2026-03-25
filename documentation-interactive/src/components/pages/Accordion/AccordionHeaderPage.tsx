import Page from "../../functional/Page";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import { packageName, pageNames } from "../../../constants";
import React from "react";

function AccordionHeaderPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.AccordionHeader}>
        Expand or collapse body when clicked on
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Accordion } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.PropsSection>
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="row" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default AccordionHeaderPage;
