import Page from "../../functional/Page";
import { Modal, Button } from "react-native-kit";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import React, { useState } from "react";
import { packageName, pageNames } from "../../../constants";

const code = `function Example() {
  const [open, setIsOpen] = useState(false);

  return (
    <>
        <Button onPress={() => setIsOpen(true)}>Open Modal</Button>

        <Modal visible={open} onRequestClose={() => setIsOpen(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Header</Modal.Title>
            </Modal.Header>

            <Modal.Body>Body</Modal.Body>

            <Modal.Footer>Footer</Modal.Footer>
        </Modal>
    </>
  );
}`;

function ModalPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.Modal}>
        Add dialogs to your site for lightboxes, user notifications, or
        completely custom content.
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Modal } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Modal, useState, Button }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          [
            "visible",
            "boolean",
            "",
            "Show modal when true; otherwise, hide modal",
          ],
          [
            "onRequestClose",
            <Code.Sample>{`() => void`}</Code.Sample>,
            "",
            "Callback fired when closing the modal.",
          ],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="modal" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default ModalPage;
