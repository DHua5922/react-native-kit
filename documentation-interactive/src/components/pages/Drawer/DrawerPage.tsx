import { Drawer, Div } from "react-native-kit";
import Page from "../../functional/Page";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import React, { useState } from "react";
import { packageName, pageNames } from "../../../constants";

const code = `function Example() {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <Div style={{ height: 200 }}>
            <Drawer.Toggle onPress={() => setOpenDrawer(true)} />

            <Drawer
                width="25%"
                show={openDrawer}
                onHide={() => setOpenDrawer(false)}
            >
                <Drawer.Header closeButton />
                <Drawer.Body>Body</Drawer.Body>
            </Drawer>
        </Div>
    );
}`;

function DrawerPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.Drawer} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Drawer } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Drawer, useState, Div }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          [
            "show",
            "boolean",
            "",
            "Show drawer if true; otherwise, hide drawer",
          ],
          [
            "onHide",
            <Code.Sample>{`() => void`}</Code.Sample>,
            "",
            "Callback fired when closing drawer.",
          ],
          ["width", "number | string", `500 | "25%"`, "Width of drawer"],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="animatedView" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default DrawerPage;
