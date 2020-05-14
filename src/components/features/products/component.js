import React, { useEffect } from "react";
import PropTypes from "prop-types";

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

ProductsList.propTypes = {
  getProducts: PropTypes.func.isRequired,
  setPageIndex: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      promo: PropTypes.string,
      isActive: PropTypes.number,
    })
  ),
  count: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
  filters: PropTypes.object.isRequired,
};

export default ProductsList;
