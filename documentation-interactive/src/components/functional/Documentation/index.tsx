import DocumentationParent from "./Documentation";
import DocumentationPropsNote from "./DocumentationPropsNote";
import DocumentationPropsSection from "./DocumentationPropsSection";
import DocumentationSection from "./DocumentationSection";
import DocumentationSectionTitle from "./DocumentationSectionTitle";
import DocumentationSubtitle from "./DocumentationSubtitle";
import DocumentationTitle from "./DocumentationTitle";

interface Documentation extends React.FC<any> {
  Title: typeof DocumentationTitle;
  Subtitle: typeof DocumentationSubtitle;
  SectionTitle: typeof DocumentationSectionTitle;
  PropsSection: typeof DocumentationPropsSection;
  PropsNote: typeof DocumentationPropsNote;
  Section: typeof DocumentationSection;
}

const Documentation = DocumentationParent as unknown as Documentation;
Documentation.Title = DocumentationTitle;
Documentation.Subtitle = DocumentationSubtitle;
Documentation.SectionTitle = DocumentationSectionTitle;
Documentation.PropsSection = DocumentationPropsSection;
Documentation.PropsNote = DocumentationPropsNote;
Documentation.Section = DocumentationSection;

export default Documentation;
