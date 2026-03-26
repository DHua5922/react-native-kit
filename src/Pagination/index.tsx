import PaginationParent from "./Pagination";
import PaginationFirst from "./PaginationFirst";
import PaginationItem from "./PaginationItem";
import PaginationLast from "./PaginationLast";
import PaginationNext from "./PaginationNext";
import PaginationPrevious from "./PaginationPrevious";
import createCompoundComponent from "../internal/createCompoundComponent";

const Pagination = createCompoundComponent(PaginationParent, {
  First: PaginationFirst,
  Item: PaginationItem,
  Last: PaginationLast,
  Next: PaginationNext,
  Previous: PaginationPrevious,
});

export default Pagination;
