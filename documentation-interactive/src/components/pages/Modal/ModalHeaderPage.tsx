import Page from "../../functional/Page";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import { packageName, pageNames } from "../../../constants";
import React from "react";

function ModalHeaderPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.ModalHeader} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Modal } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          [
            "closeButton",
            "boolean",
            "",
            "Show button for closing modal when true; otherwise, don't show the close button.",
          ],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="row" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default ModalHeaderPage;
