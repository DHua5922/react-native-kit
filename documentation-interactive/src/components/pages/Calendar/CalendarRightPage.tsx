import { Calendar } from "react-native-kit";
import Page from "../../functional/Page";
import Documentation from "../../functional/Documentation";
import { packageName, pageNames } from "../../../constants";
import Code from "../../functional/Code";
import Link from "../../functional/Link";
import React from "react";

const code = `function Example() {
  return (
    <>
        <Calendar.Right />
        <Calendar.Right>{">"}</Calendar.Right>
    </>
  );
}`;

function CalendarRightPage() {
  return (
    <Page.Documentation>
      <Documentation.Section title={pageNames.CalendarRight} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Calendar } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Basic Example">
        <Code.Editor
          scope={{
            Calendar,
          }}
        >
          {code}
        </Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          [
            "onPress",
            <Code.Sample>{`(date: Date) => void`}</Code.Sample>,
            "",
            "Callback fired when pressing button to go to next month.",
          ],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="pressable" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default CalendarRightPage;
