import React from "react";
import "./style.css";
import FilterItem from "./FilterItem";
function Filters({ filterList }) {
  return (
    <div className="filters">
      {filterList &&
        filterList.map((filter) => {
          return (
            <FilterItem filter={filter}>
              <div className="">{filter.title}</div>
            </FilterItem>
          );
        })}
    </div>
  );
}

export default Filters;
