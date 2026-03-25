import { Calendar } from "react-native-kit";
import React, { useState } from "react";
import Page from "../../functional/Page";
import Documentation from "../../functional/Documentation";
import { packageName, pageNames } from "../../../constants";
import Code from "../../functional/Code";
import Link from "../../functional/Link";

const code = `function Example() {
  const [date, setDate] = useState(new Date());

  return (
    <Calendar.Day
        value={date}
        onPress={(date) => setDate(date)}
        key={date}
        textStyle={{ color: "#ffffff" }}
    >
        {date.getDate()}
    </Calendar.Day>
  );
}`;

function CalendarDayPage() {
  return (
    <Page.Documentation>
      <Documentation.Section title={pageNames.CalendarDay} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Calendar } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Basic Example">
        <Code.Editor
          scope={{
            Calendar,
            useState,
          }}
        >
          {code}
        </Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          ["value", "Date", "", "Date of day."],
          [
            "onPress",
            <Code.Sample>{`(date: Date) => void`}</Code.Sample>,
            "",
            "Callback fired when selecting day.",
          ],
          ["textStyle", "object | any[]", "", "text style for day"],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="pressable" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default CalendarDayPage;
