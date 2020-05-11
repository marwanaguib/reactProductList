import React from "react";

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

export default List;
