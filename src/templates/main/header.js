import React from "react";
import { Link } from "react-router-dom";

import { MainHeader, Container } from "./style";

const Header = () => {
  return (
    <MainHeader>
      <Container>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </MainHeader>
  );
};

export default Header;
