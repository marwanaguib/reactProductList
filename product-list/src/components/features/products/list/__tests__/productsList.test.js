import React from "react";
import { shallow } from "enzyme";

import List from "../index";
import testState from "../../../../../store/testState";

const props = {
  products: testState.products.items,
};

describe("productsList", () => {
  it("render List to match snapshot", () => {
    const componetWrapper = shallow(<List {...props} />);
    expect(componetWrapper).toMatchSnapshot();
  });

  it("List is empty is products array empty", () => {
    const componetWrapper = shallow(<List {...{ ...props, products: [] }} />);
    expect(componetWrapper.find("h4").text()).toBe("No Products Found");
    expect(componetWrapper).toMatchSnapshot();
  });
});
