import React, { useEffect } from "react";

import List from "./list";

const ProductsList = ({ getProducts }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <>
      <List />
    </>
  );
};

export default ProductsList;
