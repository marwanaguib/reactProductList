import React from "react";
import { shallow } from "enzyme";

import Input from "../input";

const props = {
  func: jest.fn(),
  name: "test",
  elemKey: "code",
  type: "text",
};

describe("inputForm", () => {
  const componetWrapper = shallow(<Input {...props} />);
  it("render inputForm to match snapshot", () => {
    expect(componetWrapper.find(`input[type="${props.type}"]`).length).toBe(1);
    expect(componetWrapper).toMatchSnapshot();
  });
});
