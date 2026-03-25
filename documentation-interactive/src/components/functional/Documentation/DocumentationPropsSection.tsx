import { Table } from "react-native-kit";
import Gap from "../Gap";
import DocumentationSection from "./DocumentationSection";
import React from "react";

interface Props {
  headers?: string[];
  rows?: React.ReactNode[][];
  title?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

function DocumentationPropsSection({
  headers = ["Name", "Type", "Default", "Description"],
  rows = [],
  title = "Props",
  children,
  ...props
}: Props) {
  return (
    <DocumentationSection subtitle={title} {...props}>
      {children && (
        <>
          {children} <Gap />
        </>
      )}

      <Table striped border hover>
        {rows.length > 0 && (
          <Table.tr hover={false} striped={false}>
            {headers.map((header, index) => (
              <Table.th key={index}>{header}</Table.th>
            ))}
          </Table.tr>
        )}

        {rows.map((cells, index) => (
          <Table.tr striped={index % 2 === 0} key={index}>
            {cells.map((cell, index) => (
              <Table.td key={index}>{cell}</Table.td>
            ))}
          </Table.tr>
        ))}
      </Table>
    </DocumentationSection>
  );
}

export default DocumentationPropsSection;
