import React, { useRef } from "react";
import PropTypes from "prop-types";

import { InputForm } from "../../../assets/styles/common";

const Input = ({ func, name, elemKey, type }) => {
  const inputElement = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    let request = {};
    request[elemKey] = inputElement.current.value;
    func(request);
  };
  return (
    <InputForm onSubmit={handleSubmit}>
      <input placeholder={name} type={type} ref={inputElement} />
      <input type="submit" value="Search" />
    </InputForm>
  );
};

Input.propTypes = {
  func: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  elemKey: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
