import React from "react";

function Search({search, onSearchChange}) {

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        value={search}
        placeholder="Search your Recent Transactions"
        onChange={(e)=>onSearchChange(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
