import Page from "../functional/Page";
import React from "react";
import { ScrollView } from "react-native";
import Code from "../functional/Code";
import { Button, Tab, Tabs } from "react-native-kit";
import Documentation from "../functional/Documentation";
import Gap from "../functional/Gap";
import { useNavigation } from "@react-navigation/native";
import { packageName, pageNames } from "../../constants";

const npmInstall = `npm install ${packageName}`;
const yarnInstall = `yarn add ${packageName}`;
const sampleComponentUsage = `import { Div } from "${packageName}";

function App() {
    return <Div>Hello World!</Div>;
}`;

function useTabs() {
  const [activeTabKey, setActiveTabKey] = React.useState("npm");

  return {
    activeTabKey,
    setActiveTabKey,
  };
}

function InstallationPage() {
  const { activeTabKey, setActiveTabKey } = useTabs();
  const navigation = useNavigation();

  return (
    <Page.Documentation>
      <ScrollView>
        <Documentation.Section subtitle="Install with npm or yarn.">
          <Tabs
            activeKey={activeTabKey}
            onSelect={(eventKey) => setActiveTabKey(eventKey)}
          >
            <Tab eventKey="npm" title="npm">
              <Code.Sample>{npmInstall}</Code.Sample>
            </Tab>

            <Tab eventKey="yarn" title="yarn">
              <Code.Sample>{yarnInstall}</Code.Sample>
            </Tab>
          </Tabs>
        </Documentation.Section>

        <Documentation.Section subtitle="Quick Start">
          <Code.Sample>{sampleComponentUsage}</Code.Sample>
        </Documentation.Section>

        <Gap />

        <Button
          onPress={() => navigation.navigate(pageNames.Accordion as never)}
        >
          See more components
        </Button>
      </ScrollView>
    </Page.Documentation>
  );
}

export default InstallationPage;
