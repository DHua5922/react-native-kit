import AccordionParent from "./Accordion";
import AccordionBody from "./AccordionBody";
import AccordionHeader from "./AccordionHeader";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionToggle from "./AccordionToggle";
import createCompoundComponent from "../internal/createCompoundComponent";

type AccordionCompound = typeof AccordionParent & {
  Item: typeof AccordionItem;
  Header: typeof AccordionHeader;
  Body: typeof AccordionBody;
  Title: typeof AccordionTitle;
  Toggle: typeof AccordionToggle;
};

const Accordion: AccordionCompound = createCompoundComponent(AccordionParent, {
  Item: AccordionItem,
  Header: AccordionHeader,
  Body: AccordionBody,
  Title: AccordionTitle,
  Toggle: AccordionToggle,
});

export default Accordion;
