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
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </InputForm>
  );
};

export default Select;
