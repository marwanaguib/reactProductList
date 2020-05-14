import React from "react";
import { shallow } from "enzyme";

import Pagnination from "../index";
import testState from "../../../../../store/testState";
import { pageCount } from "../../../../../constants/products";

const props = {
  setPageIndex: jest.fn(),
  count: testState.products.count,
  pageIndex: testState.products.pageIndex,
};

describe("products pagination", () => {
  it("render Pagnination to match snapshot", () => {
    const componetWrapper = shallow(<Pagnination {...props} />);
    expect(componetWrapper.find("li").length).toBe(2);
    expect(componetWrapper).toMatchSnapshot();
  });

  it("Pagnination render nothing if count === 0", () => {
    const componetWrapper = shallow(
      <Pagnination {...{ ...props, count: 0 }} />
    );
    expect(componetWrapper.find("li").length).toBe(0);
    expect(componetWrapper).toMatchSnapshot();
  });

  it("setPageIndex to be called with correct params", () => {
    const componetWrapper = shallow(<Pagnination {...props} />);
    componetWrapper.find("li").at(1).simulate("click");
    expect(props.setPageIndex).toHaveBeenCalledTimes(1);
    expect(props.setPageIndex).toHaveBeenCalledWith(1);
  });
});
