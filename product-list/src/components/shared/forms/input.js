import React, { useRef } from "react";

import { InputForm } from "../../../assets/styles/common";

const Input = ({ func, name, id, type }) => {
  const inputElement = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    let request = {};
    request[id] = inputElement.current.value;
    func(request);
  };
  return (
    <InputForm onSubmit={handleSubmit}>
      <input placeholder={name} type={type} ref={inputElement} />
      <input type="submit" value="Search" />
    </InputForm>
  );
};

export default Input;
