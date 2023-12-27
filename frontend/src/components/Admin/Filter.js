import React from "react";

function Filter({ onSelect }) {
  const handleSelectChange = (event) => {
    console.log("changed");
    onSelect(event.target.value);
  };
  return (
    <div>
      <select onChange={handleSelectChange} defaultValue={"pending"}>
        <option value="all">All</option>
        <option value="pending">
          Pending
        </option>
        <option value="visible">Visible</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
}

export default Filter;
