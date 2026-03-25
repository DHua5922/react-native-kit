import Page from "../../functional/Page";
import Documentation from "../../functional/Documentation";
import { packageName, pageNames } from "../../../constants";
import Code from "../../functional/Code";
import Link from "../../functional/Link";
import React from "react";

function CalendarWeekdaysPage() {
  return (
    <Page.Documentation>
      <Documentation.Section title={pageNames.CalendarWeekdays} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Calendar } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.PropsSection>
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="row" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default CalendarWeekdaysPage;
