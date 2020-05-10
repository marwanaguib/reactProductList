import React, { useEffect, useCallback } from "react";

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

export default Filter;
