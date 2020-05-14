import styled from "styled-components";

import { colors } from "../../assets/styles/var";

export const MainHeader = styled.header`
  background: ${colors.gray};
  margin: 0 0 10px;

  ul {
    margin: 0 -10px;
    padding: 0;
    list-style: none;
    display: flex;
    li {
      a {
        text-decoration: none;
        padding: 10px;
        color: ${colors.blue};
        display: block;
        font-size: 18px;
        border-bottom: 2px transparent solid;
        :hover {
          color: ${colors.darkBlue};
          border-bottom: 2px ${colors.darkBlue} solid;
        }
      }
    }
  }
`;

export const MainFooter = styled.footer`
  background: ${colors.darkGray};
  text-align: center;
  padding: 20px 0;
  color: ${colors.white};
  font-size: 12px;
  margin: 10px 0 0;
`;

export const Container = styled.section`
  width: 80%;
  margin: 0 auto;
`;
