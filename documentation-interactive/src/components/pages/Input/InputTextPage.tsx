import { Input } from "react-native-kit";
import Page from "../../functional/Page";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { packageName, pageNames } from "../../../constants";

const code = `function Example() {
    const [text, setText] = useState("");

    return (
        <Input.Text
            placeholder="Enter text here"
            value={text}
            onChange={(text) => setText(text)}
            leftChildren={<Entypo name="magnifying-glass" size={24} color="black" />}
            rightChildren={<Entypo name="cross" size={24} color="black" onPress={() => setText("")} />}
        />
    );
}`;

function InputTextPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.InputText} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Input } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Input, useState, Entypo }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          [
            "leftChildren",
            "React.ReactNode",
            "",
            "Children to render on left side of input",
          ],
          [
            "rightChildren",
            "React.ReactNode",
            "",
            "Children to render on right side of input",
          ],
          [
            "disabled",
            "boolean",
            "false",
            "Flag for indicating if input is disabled",
          ],
          [
            "focused",
            "boolean",
            "false",
            "Flag for indicating if input is focused",
          ],
          [
            "onChange",
            <Code.Sample>{`(text: string) => void`}</Code.Sample>,
            "",
            "Callback fired when typing in input.",
          ],
          ["containerProps", "object", "", "Props for input container"],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="textInput" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default InputTextPage;
