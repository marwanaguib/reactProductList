import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Filter from "../component";
import testState from "../../../../../store/testState";

const props = {
  getDepartments: jest.fn(),
  setFilter: jest.fn(),
  departments: testState.products.departments,
};

describe("products filter", () => {
  it("render Filter to match snapshot", () => {
    const componetWrapper = shallow(<Filter {...props} />);
    expect(componetWrapper).toMatchSnapshot();
  });
  describe("functions called", () => {
    const store = configureStore()(testState);
    const componetWrapper = mount(
      <Provider store={store}>
        <Filter {...props} />
      </Provider>
    );
    it("getDepartments has been called once", () => {
      expect(props.getDepartments).toHaveBeenCalledTimes(1);
      expect(componetWrapper).toMatchSnapshot();
    });

    it("setFilter called when select onChange fire", () => {
      componetWrapper.find("select").simulate("change");
      expect(props.setFilter).toHaveBeenCalledTimes(1);
    });

    it("setFilter called when inputForm submit fire", () => {
      componetWrapper.find("form").at(0).simulate("submit");
      expect(props.setFilter).toHaveBeenCalledTimes(1);
    });
  });
});
