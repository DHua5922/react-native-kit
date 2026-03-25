import { Input, Menu } from "react-native-kit";
import Page from "../../functional/Page";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import React, { useState } from "react";
import { packageName, pageNames } from "../../../constants";

const code = `function Example() {
  const [chosenOption, setChosenOption] = useState("");

  return (
      <Input.Select value={chosenOption}>
        {["Option 3", "Option 4"].map((option, index) => (
            <Menu.Item key={index} onPress={() => setChosenOption(option)}>
              {option}
            </Menu.Item>
        ))}
      </Input.Select>
  );
}`;

function InputSelectPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.InputSelect} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Input } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Input, useState, Menu }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection>
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="textInputCN" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default InputSelectPage;
