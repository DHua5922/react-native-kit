import Page from "../../functional/Page";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import React, { useState } from "react";
import { packageName, pageNames } from "../../../constants";
import { Text, Form } from "react-native-kit";

const code = `function Example() {
    const [text, setText] = useState("");
    const [submittedText, setSubmittedText] = useState("");

    return (
      <>
        <Form onSubmit={() => setSubmittedText(text)}>
          <Form.Label required>Input Label</Form.Label>
          <Form.Input
            placeholder="Enter text here"
            value={text}
            onChange={(text) => setText(text)}
            style={{ marginVertical: 10 }}
          />
          <Form.Button style={{ marginBottom: 10 }} >Submit</Form.Button>
        </Form>

        <Text>Submited Text: {submittedText}</Text>
      </>
    );
}`;

function FormPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.Form} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Form } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Form, useState, Text }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          [
            "onSubmit",
            <Code.Sample>{`() => void`}</Code.Sample>,
            "",
            "Callback for handling form submission.",
          ],
        ]}
      />
    </Page.Documentation>
  );
}

export default FormPage;
