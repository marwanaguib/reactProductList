import React from "react";

import { Row, Column, ProductTitle, Discount } from "../style";
import { DFlex } from "../../../../assets/styles/common";

const List = ({ products }) => {
  return (
    <Row>
      {products.map((item) => {
        return (
          <Column key={item.name}>
            <DFlex justify="space-between">
              <ProductTitle>{item.name}</ProductTitle>
              {item.isActive ? (
                <div>
                  <s>{item.price}</s>
                </div>
              ) : (
                <div>{item.price}</div>
              )}
            </DFlex>
            {item.isActive && (
              <DFlex justify="flex-end">
                <Discount>&darr; {item.promo}</Discount>
                <div>{item.price}</div>
              </DFlex>
            )}
          </Column>
        );
      })}
    </Row>
  );
};

export default List;
