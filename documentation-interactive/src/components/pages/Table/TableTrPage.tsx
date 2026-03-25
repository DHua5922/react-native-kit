import Page from "../../functional/Page";
import Code from "../../functional/Code";
import Documentation from "../../functional/Documentation";
import Link from "../../functional/Link";
import { packageName, pageNames } from "../../../constants";
import React from "react";

function TableTrPage(props: any) {
  return (
    <Page.Documentation {...props}>
      <Documentation.Section title={pageNames.TableTr}>
        Table row
      </Documentation.Section>

      <Documentation.Section subtitle="Import">
        <Code.Sample>{`import { Table } from "${packageName}";`}</Code.Sample>
      </Documentation.Section>

      <Documentation.PropsSection
        rows={[
          ["striped", "boolean", "true", "Add zebra-striping"],
          ["hover", "boolean", "true", "Add hovering effect"],
        ]}
      >
        <Documentation.PropsNote>
          Includes all props from <Link type="info" component="row" />
        </Documentation.PropsNote>
      </Documentation.PropsSection>
    </Page.Documentation>
  );
}

export default TableTrPage;
