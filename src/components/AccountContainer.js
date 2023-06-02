import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

export const baseUrl = "http://localhost:8001/transactions";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedSort, setSelectedSort] = useState("All");

  //function to getTransactions from the server

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch(baseUrl);
        if (response.status === 200) {
          const data = await response.json();
          setTransactions(data);
        } else throw new Error(`Failed to fetch with status`);
      })();
    } catch (error) {
      console.error(error);
    }

    return () => {};
  }, [transactions]);
  //handle searching transactions
  let transactionsToDisplay = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(search.toLowerCase())
  );
  //handleSorting transactions
  //sort for All, Amount, Date, Description and Category
  if (selectedSort === "Amount") {
    transactionsToDisplay.sort((a, b) => b.amount - a.amount);
  } else if (selectedSort === "Date") {
    transactionsToDisplay.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (selectedSort === "Description") {
    transactionsToDisplay.sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  } else if (selectedSort === "Category") {
    transactionsToDisplay.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div>
      <Search
        search={search}
        onSearchChange={setSearch}
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
      />
      <AddTransactionForm />
      <TransactionsList transactions={transactionsToDisplay} />
    </div>
  );
}

export default AccountContainer;
