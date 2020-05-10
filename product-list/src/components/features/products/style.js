import styled from "styled-components";
import { colors } from "../../../assets/styles/var";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const Column = styled.div`
  width: calc(50% - 30px);
  background: ${colors.gray};
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 10px 15px;
`;

export const FirstColumn = styled.div`
  width: calc(25% - 30px);
  margin: 0px 15px;
`;

export const SecondColumn = styled.div`
  width: calc(75% - 30px);
  margin: 0px 15px;
`;

export const ProductTitle = styled.h2`
  color: ${colors.blue};
  margin: 0;
`;

export const Discount = styled.div`
  margin: 0 10px 0 0px;
  color: green;
`;

export const Pagination = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;

  li {
    margin: 0 2px;
    background: ${colors.gray};
    padding: 2px 5px;
    border: 1px ${colors.darkGray} solid;
    cursor: pointer;

    :hover {
      color: ${colors.blue};
    }
  }
  .active {
    color: ${colors.blue};
    cursor: auto;
  }
`;
