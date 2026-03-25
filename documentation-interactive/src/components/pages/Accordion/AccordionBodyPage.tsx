import Page from "../../functional/Page";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import { packageName, pageNames } from "../../../constants";
import React from "react";

function AccordionBodyPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.AccordionBody}>
        Body that expands when event key is active or collapses when event key
        is not active
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Accordion } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.PropsSection>
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="animatedView" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default AccordionBodyPage;
