import { Input, Text } from "react-native-kit";
import Page from "../../functional/Page";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import React, { useState } from "react";
import { packageName, pageNames } from "../../../constants";

const code = `function Example() {
    const [text, setText] = useState("{}");
    const [json, setJson] = useState({});

    return (
        <>
            <Input.Json
                value={text}
                onChange={(text) => setText(text)}
                onFormat={(jsonString, json) => setJson(json)}
                maxHeight={400}
                textStyle={{ fontSize: 20 }}
            />

            <Text>stringified JSON: {JSON.stringify(json)}</Text>
        </>
    );
}`;

function InputJsonPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.InputJson} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Input } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Input, useState, Text }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          ["value", "string", "", "Stringified json"],
          [
            "onFormat",
            <Code.Sample>{`(str: string, obj: object) => void`}</Code.Sample>,
            "",
            "Callback fired when formatting JSON.",
          ],
          [
            "onChange",
            <Code.Sample>{`(text: string) => void`}</Code.Sample>,
            "",
            "Callback fired when typing in JSON input.",
          ],
          [
            "maxHeight",
            "number | string",
            "auto",
            "Maximum height (number or percentage string) for JSON input.",
          ],
          ["textStyle", "object | any[]", "", "text style for JSON input"],
          ["disabled", "boolean", "", "Prevent user from typing JSON in input"],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="div" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default InputJsonPage;
