import AccordionParent from "./Accordion";
import AccordionBody from "./AccordionBody";
import AccordionHeader from "./AccordionHeader";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionToggle from "./AccordionToggle";

interface Accordion extends React.FC<any> {
  Item: typeof AccordionItem;
  Header: typeof AccordionHeader;
  Body: typeof AccordionBody;
  Title: typeof AccordionTitle;
  Toggle: typeof AccordionToggle;
}

const Accordion = AccordionParent as Accordion;
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;
Accordion.Title = AccordionTitle;
Accordion.Toggle = AccordionToggle;

export default Accordion;
