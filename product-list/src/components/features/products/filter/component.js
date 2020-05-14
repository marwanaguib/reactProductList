import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import Input from "../../../shared/forms/input";
import Select from "../../../shared/forms/select";

const Filter = ({ getDepartments, setFilter, departments }) => {
  useEffect(() => {
    getDepartments();
  }, [getDepartments]);

  const items = useCallback(() => {
    return [
      {
        name: "Departments",
        id: "department",
        type: "select",
        options: [...departments],
      },
      { name: "Promo Code", id: "promo", type: "text" },
      { name: "Product Name", id: "search", type: "text" },
    ];
  }, [departments]);

  return (
    <>
      <h3>Filter Products</h3>
      {items().map((item) => {
        return item.type === "select" ? (
          <Select key={item.name} {...item} func={setFilter} />
        ) : (
          <Input key={item.name} {...item} func={setFilter} />
        );
      })}
    </>
  );
};

Filter.propTypes = {
  getDepartments: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  departments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Filter;
