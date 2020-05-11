import React from "react";

import { pageCount } from "../../../../constants/products";
import { Pagination } from "../style";

const Pagnination = ({ setPageIndex, count, pageIndex }) => {
  const paginationItems = () => {
    const page = Math.ceil(count / pageCount);
    const items = [];
    for (let i = 0; i < page; i++) {
      if (pageIndex === i + 1) {
        items.push(
          <li key={`page${i}`} className="active">
            {i + 1}
          </li>
        );
      } else {
        items.push(
          <li key={`page${i}`} onClick={() => setPageIndex(i)}>
            {i + 1}
          </li>
        );
      }
    }
    return items;
  };

  return (
    count !== 0 &&
    count > pageCount && <Pagination>{paginationItems()}</Pagination>
  );
};

export default Pagnination;
