import React from "react";

import Header from "./header";
import Footer from "./footer";
import Interceptor from "../../utils/axios/interceptors";
import { Container } from "./style";

const MainTemplate = (props) => {
  const childrens = React.Children.map(props.children, (child) => {
    return React.cloneElement(child, { ...child.props });
  });
  return (
    <>
      <div>
        <Interceptor></Interceptor>
        <Header></Header>
        <Container>{childrens}</Container>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainTemplate;
