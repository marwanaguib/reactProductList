import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import ProductsList from "../component";
import testState from "../../../../store/testState";
import { pageCount } from "../../../../constants/products";

jest.mock("../filter", () => () => <div />);

const props = {
  getProducts: jest.fn(),
  setPageIndex: jest.fn(),
  products: testState.products.items,
  count: testState.products.count,
  pageIndex: testState.products.pageIndex,
  filters: testState.products.filters,
};

describe("products", () => {
  it("render productsList to match snapshot", () => {
    const componetWrapper = shallow(<ProductsList {...props} />);
    expect(componetWrapper).toMatchSnapshot();
  });

  it("getProducts has been called once with correct params", () => {
    const store = configureStore()(testState);
    const componetWrapper = mount(
      <Provider store={store}>
        <ProductsList {...props} />
      </Provider>
    );
    expect(props.getProducts).toHaveBeenCalledTimes(1);
    expect(props.getProducts).toHaveBeenCalledWith(
      props.pageIndex,
      pageCount,
      props.filters
    );
    expect(componetWrapper).toMatchSnapshot();
  });
});
