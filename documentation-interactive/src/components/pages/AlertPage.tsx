import React, { useState } from "react";
import Page from "../functional/Page";
import { Alert, Div, Button } from "react-native-kit";
import Code from "../functional/Code";
import Documentation from "../functional/Documentation";
import Link from "../functional/Link";
import { packageName, pageNames } from "../../constants";

const code = `function Example() {
  const [showSuccess, setShowSuccess] = useState(true);
  const [showDanger, setShowDanger] = useState(true);
  const [showWarning, setShowWarning] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [showDefault, setShowDefault] = useState(true);

  return (
    <Div>
        <Button
          onPress={() => {
              setShowSuccess(true);
              setShowDanger(true);
              setShowWarning(true);
              setShowInfo(true);
              setShowDefault(true);
          }}
          style={{ marginBottom: 10 }}
        >Show all alerts</Button>

        {showSuccess && <Alert type="success" dismissible onClose={() => setShowSuccess(false)}>Success</Alert>}
        {showDanger && <Alert type="danger" dismissible onClose={() => setShowDanger(false)}>Danger</Alert>}
        {showWarning && <Alert type="warning" dismissible onClose={() => setShowWarning(false)}>Warning</Alert>}
        {showInfo && <Alert type="info" dismissible onClose={() => setShowInfo(false)}>Info</Alert>}
        {showDefault && <Alert dismissible onClose={() => setShowDefault(false)}>Default</Alert>}
    </Div>
  );
}`;

function AlertPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.Alert}>
        Provide contextual feedback messages for typical user actions
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Alert } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Div, Alert, useState, Button }}>
          {code}
        </Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          [
            "type",
            "success | danger | warning | info | default",
            "default",
            "Type of alert",
          ],
          [
            "dismissible",
            "boolean",
            "false",
            "Show button for dismissing alert",
          ],
          [
            "onClose",
            <Code.Sample>{`() => void`}</Code.Sample>,
            "",
            "Callback fired when closing alert.",
          ],
          [
            "CloseButton",
            "React.ReactNode",
            <Link component="buttonClose" />,
            "Custom close button. If not provided, default close button will be used.",
          ],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="row" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default AlertPage;
