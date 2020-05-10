import React from "react";
import { Link } from "react-router-dom";

import { MainHeader, Container } from "./style";

export default function Header(props) {
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
}
