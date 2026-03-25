import { Form } from "react-native-kit";
import Page from "../../functional/Page";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import { packageName, pageNames } from "../../../constants";
import React from "react";

const code = `function Example() {
    return <Form.Label required>Label</Form.Label>;
}`;

function FormLabelPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.FormLabel} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Form } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Form }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[["required", "boolean", "", "Indicate if field is required"]]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="textCN" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default FormLabelPage;
