import { Div } from "react-native-kit";
import DocumentationTitle from "./DocumentationTitle";
import DocumentationSubtitle from "./DocumentationSubtitle";
import DocumentationSectionTitle from "./DocumentationSectionTitle";
import React from "react";

interface Props {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  sectionTitle?: string;
  [key: string]: any;
}

function DocumentationSection({
  children,
  title,
  subtitle,
  sectionTitle,
  ...props
}: Props) {
  return (
    <Div {...props}>
      {title && <DocumentationTitle>{title}</DocumentationTitle>}
      {subtitle && <DocumentationSubtitle>{subtitle}</DocumentationSubtitle>}
      {sectionTitle && (
        <DocumentationSectionTitle>{sectionTitle}</DocumentationSectionTitle>
      )}
      <Div>{children}</Div>
    </Div>
  );
}

export default DocumentationSection;
