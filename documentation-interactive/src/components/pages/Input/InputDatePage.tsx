import { Calendar, Input } from "react-native-kit";
import Page from "../../functional/Page";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import React, { createContext, useContext, useState } from "react";
import { packageName, pageNames } from "../../../constants";
import { format } from "date-fns";

const basicExampleCode = `function Example() {
  const [date, setDate] = useState(format(new Date(), "MM/dd/yyyy"));

  return (
    <Input.Date value={date}>
      <Calendar
        value={new Date(date)}
        onChange={(date) => setDate(format(date, "MM/dd/yyyy"))}
      >
        <Calendar.Header>
          <Calendar.Left />

          <Calendar.Title />

          <Calendar.Right />
        </Calendar.Header>

        <Calendar.Weekdays />

        <Calendar.Days />
      </Calendar>
    </Input.Date>
  );
}`;

const editInputCode = `const InputContext = createContext({
  selection: {
    start: 0,
    end: 0
  },
  setSelection: () => {},
  selectedText: "",
  setSelectedText: () => {}
});

function InputProvider({ children }) {
  const [selection, setSelection] = useState({
    start: 0,
    end: 0
  });

  const [selectedText, setSelectedText] = useState("");

  return (
    <InputContext.Provider
      value={{ selection, setSelection, selectedText, setSelectedText }}
    >
      {children}
    </InputContext.Provider>
  );
}

function DateInput({
  onChange,
  ...props
}) {
  const { selection, setSelection, selectedText, setSelectedText } =
    useContext(InputContext);

  return (
      <InputProvider>
        <Input.Date
            onChange={(text) => {
              const [monthInput, dayInput, yearInput] = text.split("/");

              const firstSlashIndex = text.indexOf("/");
              const lastSlashIndex = text.lastIndexOf("/");

              let newMonthInput = monthInput;
              let newDayInput = dayInput;
              let newYearInput = yearInput;
              if (selection.start < firstSlashIndex) {
                const newMonth = (selectedText + monthInput).slice(-2);
                newMonthInput = (
                  Number(newMonth) > 12 ? monthInput : newMonth
                ).padStart(2, "0");
                setSelectedText(newMonthInput);
              } else if (selection.start < lastSlashIndex) {
                const newDay = (selectedText + dayInput).slice(-2);
                const maxDays = new Date(
                  Number(yearInput),
                  Number(monthInput),
                  0
                ).getDate();
                newDayInput = (
                  Number(newDay) > maxDays ? dayInput : newDay
                ).padStart(2, "0");
                setSelectedText(newDayInput);
              } else {
                newYearInput = (selectedText + yearInput)
                  .slice(-4)
                  .padStart(4, "0");
                setSelectedText(newYearInput);
              }

              onChange &&
                onChange(newMonthInput + "/" + newDayInput + "/" + newYearInput);
              setSelection({ start: selection.start, end: selection.end });
            }}
            selection={selection}
            onSelectionChange={(event) => {
              const { text, selection } = event.nativeEvent;

              const firstSlashIndex = text.indexOf("/");
              const lastSlashIndex = text.lastIndexOf("/");

              let startIndex = selection.start;
              let endIndex = selection.end;
              if (selection.start <= firstSlashIndex) {
                startIndex = 0;
                endIndex = firstSlashIndex;
              } else if (selection.start <= lastSlashIndex) {
                startIndex = firstSlashIndex + 1;
                endIndex = lastSlashIndex;
              } else if (selection.start > lastSlashIndex) {
                startIndex = lastSlashIndex + 1;
                endIndex = text.length;
              }

              setSelection({ start: startIndex, end: endIndex });
              setSelectedText(text.slice(startIndex, endIndex));
            }}
            {...props}
        >
            <Calendar
              value={new Date(props.value)}
              onChange={(date) => onChange && onChange(format(date, "MM/dd/yyyy"))}
            >
              <Calendar.Header>
                <Calendar.Left />

                <Calendar.Title />

                <Calendar.Right />
              </Calendar.Header>

              <Calendar.Weekdays />

              <Calendar.Days />
            </Calendar>
        </Input.Date>
      </InputProvider>
  );
}

function Example() {
    const [date, setDate] = useState(format(new Date(), "MM/dd/yyyy"));

    return (
        <InputProvider>
          <DateInput
              value={date}
              onChange={(text) => setDate(text)}
          />
        </InputProvider>
    );
}
    
render(<Example />);`;

function InputDatePage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.InputDate} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Input } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Basic Example / Only Pick Date From Calendar">
        <Code.Editor
          scope={{
            Input,
            Calendar,
            useState,
            format,
          }}
        >
          {basicExampleCode}
        </Code.Editor>
      </Documentation.Section>

      <Documentation.Section subtitle="Editing Input">
        <Code.Editor
          noInline
          scope={{
            Input,
            Calendar,
            useState,
            format,
            createContext,
            useContext,
          }}
        >
          {editInputCode}
        </Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          ["value", "string", "", "Chosen date."],
          [
            "onChange",
            <Code.Sample>{`(date: string) => void`}</Code.Sample>,
            "",
            "Callback fired when typing date in input or selecting date from calendar.",
          ],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="textInputCN" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default InputDatePage;
