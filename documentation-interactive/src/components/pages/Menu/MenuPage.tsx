import Page from "../../functional/Page";
import { Menu, Text } from "react-native-kit";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import { packageName, pageNames } from "../../../constants";
import React from "react";

const code = `function Example() {
  return (
    <Menu>
        <Menu.Item>Option 1</Menu.Item>
        <Menu.Item>Option 2</Menu.Item>
    </Menu>
  );
}`;

function MenuPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.Menu} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Menu } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Menu, Text }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection>
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="div" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default MenuPage;
