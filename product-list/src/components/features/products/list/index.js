import React from "react";
import PropTypes from "prop-types";

import { Row, Column, ProductTitle, Discount } from "../style";
import { DFlex } from "../../../../assets/styles/common";
import { currency } from "../../../../constants/products";

const List = ({ products }) => {
  const calcPriceDiscount = (promo, price) => {
    const promoAdj = parseInt(promo.replace("%", "")) / 100;
    return price - price * promoAdj;
  };

  return (
    <Row>
      {products.length > 0 ? (
        products.map((item) => {
          return (
            <Column key={item.id}>
              <DFlex justify="space-between">
                <ProductTitle>{item.name}</ProductTitle>
                {item.isActive === 1 ? (
                  <div>
                    <s>
                      {item.price}
                      {currency}
                    </s>
                  </div>
                ) : (
                  <div>
                    {item.price}
                    {currency}
                  </div>
                )}
              </DFlex>
              {item.isActive === 1 && (
                <DFlex justify="flex-end">
                  <Discount>&darr; {item.promo}</Discount>
                  <div>
                    {calcPriceDiscount(item.promo, item.price)}
                    {currency}
                  </div>
                </DFlex>
              )}
            </Column>
          );
        })
      ) : (
        <h4>No Products Found</h4>
      )}
    </Row>
  );
};

List.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      promo: PropTypes.string,
      isActive: PropTypes.number,
    })
  ),
};

export default List;
