import Page from "../functional/Page";
import Code from "../functional/Code";
import Documentation from "../functional/Documentation";
import Link from "../functional/Link";
import { packageName, pageNames } from "../../constants";
import React from "react";

function PopupPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.Popup}>
        Container for showing popup.
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Popup } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          [
            "left",
            "string",
            "auto",
            "Distance between the left edge of a positioned element and the left edge of its containing block.",
          ],
          [
            "top",
            "string",
            "auto",
            "Distance between the top edge of a positioned element and the top edge of its containing block.",
          ],
          ["width", "string", "auto", "Width of popup."],
          ["visible", "boolean", "", "Indicator of whether to show popup."],
          [
            "onShow",
            <Code.Sample>{`() => void`}</Code.Sample>,
            "",
            "Callback fired when showing popup.",
          ],
          [
            "onHide",
            <Code.Sample>{`() => void`}</Code.Sample>,
            "",
            "Callback fired when hiding popup.",
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

export default PopupPage;
