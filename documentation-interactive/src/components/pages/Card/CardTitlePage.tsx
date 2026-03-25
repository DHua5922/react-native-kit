import Page from "../../functional/Page";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import { packageName, pageNames } from "../../../constants";
import React from "react";

function CardTitlePage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.CardTitle} />

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Card } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.PropsSection>
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="textCN" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default CardTitlePage;
