import DocumentationPage from "./DocumentationPage";
import PageParent from "./Page";

interface Page extends React.FC<any> {
  Documentation: typeof DocumentationPage;
}

const Page = PageParent as Page;
Page.Documentation = DocumentationPage;

export default Page;
