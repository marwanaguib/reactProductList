import React from "react";

import { InputForm } from "../../../assets/styles/common";

const Select = ({ func, name, id, options }) => {
  const handleChange = (e) => {
    let request = {};
    request[id] = e.target.value;
    func(request);
  };
  return (
    <InputForm>
      <select onChange={handleChange}>
        <option value="">{`Select ${name}`}</option>
        {options.map((item) => (
          <option value={item.name} key={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </InputForm>
  );
};

export default Select;
