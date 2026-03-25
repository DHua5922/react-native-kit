import Page from "../../functional/Page";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "react-native-kit";
import { packageName, pageNames } from "../../../constants";
import React from "react";

const code = `function Example() {
    return (
        <>
           <Drawer.Toggle />
           <Drawer.Toggle Icon={Ionicons} name="ios-menu-outline" />
        </>
    );
}`;

function DrawerTogglePage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.DrawerToggle}>
        Button for showing drawer
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Drawer } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Drawer, Ionicons }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          [
            "Icon",
            "",
            <Link link="https://icons.expo.fyi">Feather</Link>,
            "Icon type, such as Feather or Ionicons",
          ],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="expoIcons" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default DrawerTogglePage;
