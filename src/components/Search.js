import React from "react";

function Search({ search, onSearchChange, onSortChange, selectedSort }) {
  return (
    <div>
      <div className="ui large fluid icon input">
        <input
          type="text"
          value={search}
          placeholder="Search your Recent Transactions"
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <i className="circular search link icon"></i>
      </div>
      <div className="ui padded container">
        <i className="sort icon large"></i>
        <span className="ui item header">Sort </span>
        <select
          className="custom-select"
          value={selectedSort}
          onChange={(e) => onSortChange(e.target.value)}>
          <option value="All">All</option>
          <option value="Amount" class="ui teal button">
            Amount
          </option>
          <option value="Category" class="ui green button">
            Category
          </option>
          <option value="Description" class="ui blue button">
            Description
          </option>
        </select>
      </div>
    </div>
  );
}

export default Search;
