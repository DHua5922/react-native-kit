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
            <Input.Radio
                checked={checked1}
                onChange={(checked) => setChecked1(checked)}
                style={{ marginBottom: 12 }}
            >
                Radio 1
            </Input.Radio>

            <Input.Radio
                checked={checked2}
                onChange={(checked) => setChecked2(checked)}
                disabled
            >
                Disabled radio
            </Input.Radio>
        </>
    );
}`;

function InputRadioPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.InputRadio} />

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
            "Show radio as chosen; otherwise, show radio as not chosen",
          ],
          [
            "onChange",
            <Code.Sample>{`(checked: boolean) => void`}</Code.Sample>,
            "",
            "Callback fired when radio has been pressed.",
          ],
          ["size", "number", "24", "Width and height of radio."],
          ["color", "string", "#2089dc", "Color of radio."],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="pressable" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default InputRadioPage;
