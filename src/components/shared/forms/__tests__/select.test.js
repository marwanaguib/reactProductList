import React from "react";
import { shallow } from "enzyme";

import Select from "../select";

const props = {
  func: jest.fn(),
  name: "test",
  elemKey: "department",
  options: [{ id: 1, name: "option1" }],
};

describe("select", () => {
  it("render select to match snapshot", () => {
    const componetWrapper = shallow(<Select {...props} />);
    expect(componetWrapper.find(`option`).at(1).text()).toBe(
      props.options[0].name
    );
    expect(componetWrapper).toMatchSnapshot();
  });
});
