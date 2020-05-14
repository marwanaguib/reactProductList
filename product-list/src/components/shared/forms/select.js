import React from "react";
import PropTypes from "prop-types";

import { InputForm } from "../../../assets/styles/common";

const Select = ({ func, name, elemKey, options }) => {
  const handleChange = (e) => {
    let request = {};
    request[elemKey] = e.target.value;
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
Select.propTypes = {
  func: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  elemKey: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
export default Select;
