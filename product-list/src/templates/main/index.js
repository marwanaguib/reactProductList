import React from "react";

import Header from "./header";
import Footer from "./footer";
import Interceptor from "../../utils/axios/interceptors";
import { Container } from "./style";

export default function MainTemplate(props) {
  const childrens = React.Children.map(props.children, (child) => {
    return React.cloneElement(child, { ...child.props });
  });
  return (
    <div className="wrapper">
      <Interceptor></Interceptor>
      <Header></Header>
      <Container>{childrens}</Container>
      <Footer></Footer>
    </div>
  );
}
