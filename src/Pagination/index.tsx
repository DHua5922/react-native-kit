import React from "react";
import PaginationParent from "./Pagination";
import PaginationFirst from "./PaginationFirst";
import PaginationItem from "./PaginationItem";
import PaginationLast from "./PaginationLast";
import PaginationNext from "./PaginationNext";
import PaginationPrevious from "./PaginationPrevious";

interface Pagination extends React.FC<any> {
  First: typeof PaginationFirst;
  Item: typeof PaginationItem;
  Last: typeof PaginationLast;
  Next: typeof PaginationNext;
  Previous: typeof PaginationPrevious;
}

const Pagination = PaginationParent as unknown as Pagination;
Pagination.First = PaginationFirst;
Pagination.Item = PaginationItem;
Pagination.Last = PaginationLast;
Pagination.Next = PaginationNext;
Pagination.Previous = PaginationPrevious;

export default Pagination;
