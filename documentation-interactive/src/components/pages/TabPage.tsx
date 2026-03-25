import Page from "../functional/Page";
import Code from "../functional/Code";
import Documentation from "../functional/Documentation";
import Link from "../functional/Link";
import { packageName, pageNames } from "../../constants";
import React from "react";

function TabPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.Tab} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Tab } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          ["title", "React.ReactNode", "", "Tab label."],
          [
            "eventKey",
            "string",
            "",
            "Key that will be used for toggling active tab.",
          ],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="button" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default TabPage;
