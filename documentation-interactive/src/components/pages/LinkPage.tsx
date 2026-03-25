import Page from "../functional/Page";
import { Link } from "react-native-kit";
import Code from "../functional/Code";
import Documentation from "../functional/Documentation";
import LinkView from "../functional/Link";
import { packageName, pageNames } from "../../constants";
import React from "react";

const code = `function Example() {
  return (
    <Link type="info" link="https://reactnative.dev/">
        React Native Link
    </Link>
  );
}`;

function LinkPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.Link}>
        Url to go to when clicked on.
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Link } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.Section subtitle="Examples">
        <Code.Editor scope={{ Link }}>{code}</Code.Editor>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[["link", "string", "", "url to go to when clicked on"]]}
      >
        <Documentation.PropsNote>
          Includes all props from <LinkView type="info" component="div" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default LinkPage;
