import Page from "../../functional/Page";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import { MaterialIcons } from "@expo/vector-icons";
import { Menu } from "react-native-kit";
import { packageName, pageNames } from "../../../constants";
import React, { useState } from "react";

const code = `function Example() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Menu.Toggle
      showMenu={showMenu}
      onShowMenu={() => setShowMenu(true)}
      onHideMenu={() => setShowMenu(false)}
    >
      <Menu.Item>Option 1</Menu.Item>
      <Menu.Item>Option 2</Menu.Item>
    </Menu.Toggle>
  );
}`;

function MenuTogglePage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.MenuToggle}>
        Button for showing menu
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Menu } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Menu, MaterialIcons, useState }}>
          {code}
        </Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          [
            "Icon",
            "",
            <Link link="https://icons.expo.fyi">Feather</Link>,
            "Icon type, such as Feather or MaterialIcons",
          ],
          [
            "IconName",
            "string",
            "more-vertical",
            "Value for name property of Icon",
          ],
          [
            "Toggle",
            "React.ReactNode",
            "",
            "Alternative button for toggling menu when clicked on",
          ],
          ["showMenu", "boolean", "", "Indicator to show menu or not."],
          [
            "onShow",
            <Code.Sample>{`() => void`}</Code.Sample>,
            "",
            "Callback fired when showing menu for icon.",
          ],
          [
            "onHide",
            <Code.Sample>{`() => void`}</Code.Sample>,
            "",
            "Callback fired when hiding menu for icon.",
          ],
          [
            "offsetMenuPosHorizontal",
            "number",
            "",
            "Offset for horizontal position of menu",
          ],
          [
            "offsetMenuPosVertical",
            "number",
            "",
            "Offset for vertical position of menu",
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

export default MenuTogglePage;
