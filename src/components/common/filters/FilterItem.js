import React from "react";
import "./FilterItem.css";

function FilterItem({ filter }) {
  return (
    <div className="FiterItem">
      {filter.icon && filter.icon}
      <div className="filter-name">{filter.title}</div>
    </div>
  );
}

export default FilterItem;
