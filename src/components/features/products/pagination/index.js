import React from "react";
import PropTypes from "prop-types";

import { pageCount } from "../../../../constants/products";
import { Pagination } from "../style";

const Pagnination = ({ setPageIndex, count, pageIndex }) => {
  const paginationItems = () => {
    const page = Math.ceil(count / pageCount);
    const items = [];
    for (let i = 0; i < page; i++) {
      if (pageIndex === i) {
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

Pagnination.propTypes = {
  setPageIndex: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
};

export default Pagnination;
