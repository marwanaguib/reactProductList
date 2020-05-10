import React, { useEffect } from "react";

import List from "./list";
import Pagnination from "./pagination";
import Filter from "./filter";
import { Row, FirstColumn, SecondColumn } from "./style";

const ProductsList = ({
  getProducts,
  setPageIndex,
  products,
  count,
  pageIndex,
}) => {
  useEffect(() => {
    getProducts(pageIndex);
  }, [getProducts, pageIndex]);
  return (
    <Row>
      <FirstColumn>
        <Filter />
      </FirstColumn>
      <SecondColumn>
        <List products={products} />
        <Pagnination
          count={count}
          setPageIndex={setPageIndex}
          pageIndex={pageIndex}
        />
      </SecondColumn>
    </Row>
  );
};

export default ProductsList;