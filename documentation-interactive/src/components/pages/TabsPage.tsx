import Page from "../functional/Page";
import Code from "../functional/Code";
import Documentation from "../functional/Documentation";
import Link from "../functional/Link";
import { packageName, pageNames } from "../../constants";
import { Tabs, Tab } from "react-native-kit";
import React, { useState } from "react";

const code = `function Example() {
  const [activeKey, setActiveKey] = useState("one");
  return (
    <Tabs activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
      <Tab eventKey="one" title="One">Content for tab 1</Tab>
      <Tab eventKey="two" title="Two">Content for tab 2</Tab>
      <Tab eventKey="three" title="Three" disabled>Content for tab 3</Tab>
    </Tabs>
  );
}`;

function TabsPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.Tabs} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Tabs } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Tabs, Tab, useState }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          ["activeKey", "string", "", "Key of chosen tab."],
          [
            "onSelect",
            <Code.Sample>{`(eventKey: string) => void`}</Code.Sample>,
            "",
            "Callback fired when selecting tab.",
          ],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="div" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default TabsPage;
