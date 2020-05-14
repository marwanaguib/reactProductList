import React, { useEffect } from "react";

import List from "./list";
import Pagnination from "./pagination";
import Filter from "./filter";
import { Row, FirstColumn, SecondColumn } from "./style";
import { pageCount } from "../../../constants/products";

const ProductsList = ({
  getProducts,
  setPageIndex,
  products,
  count,
  pageIndex,
  filters,
}) => {
  useEffect(() => {
    getProducts(pageIndex, pageCount, filters);
  }, [getProducts, pageIndex, filters]);
  return (
    <Row>
      <FirstColumn>
        <Filter />
      </FirstColumn>
      <SecondColumn>
        {products && <List products={products} />}
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
