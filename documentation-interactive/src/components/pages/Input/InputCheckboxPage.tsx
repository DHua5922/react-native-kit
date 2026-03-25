import { Input } from "react-native-kit";
import Page from "../../functional/Page";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import React, { useState } from "react";
import { packageName, pageNames } from "../../../constants";

const code = `function Example() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (
        <>
            <Input.Checkbox
                checked={checked1}
                onChange={(checked) => setChecked1(checked)}
                style={{ marginBottom: 12 }}
            >
                Checkbox 1
            </Input.Checkbox>

            <Input.Checkbox
                checked={checked2}
                onChange={(checked) => setChecked2(checked)}
                disabled
            >
                Disabled checkbox
            </Input.Checkbox>
        </>
    );
}`;

function InputCheckboxPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.InputCheckbox} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Input } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Input, useState }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          [
            "checked",
            "boolean",
            "false",
            "Show checkmark if checked; otherwise, hide checkmark.",
          ],
          [
            "onChange",
            <Code.Sample>{`(checked: boolean) => void`}</Code.Sample>,
            "",
            "Callback fired when checkbox has been pressed.",
          ],
          ["size", "number", "24", "Width and height of checkbox."],
          ["Checkmark", "React.ReactNode", "", "Custom checkmark."],
          ["color", "string", "#2089dc", "Color of checkmark."],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="pressable" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default InputCheckboxPage;
