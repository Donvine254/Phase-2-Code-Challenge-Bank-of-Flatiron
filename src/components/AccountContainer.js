import React, { useState, useEffect, useMemo } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Axios from "axios";

export const baseUrl = "http://localhost:8001/transactions";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedSort, setSelectedSort] = useState("All");
  const [error, setError] = useState(false);

  //function to getTransactions from the server

  useEffect(() => {
    try {
      (async () => {
        const response = await Axios.get(baseUrl);
        if (response.status === 200) {
          setTransactions(response.data);
        } else
          throw new Error(`Failed to fetch with status ${response.status}`);
      })();
    } catch (error) {
      console.error(error);
      setError(true);
    }

    return () => {};
  }, [transactions]);
  //handle searching transactions
  const transactionsToDisplay = useMemo(() => {
    return transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [transactions, search]);
  //handleSorting transactions
  //sort for All, Amount, Date, Description and Category
  useMemo(() => {
    if (selectedSort === "Amount") {
      transactionsToDisplay.sort((a, b) => b.amount - a.amount);
    } else if (selectedSort === "Date") {
      transactionsToDisplay.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (selectedSort === "Description") {
      transactionsToDisplay.sort((a, b) =>
        a.description.localeCompare(b.description)
      );
    } else if (selectedSort === "Category") {
      transactionsToDisplay.sort((a, b) =>
        a.category.localeCompare(b.category)
      );
    }
  }, [transactionsToDisplay, selectedSort]); //use memo ensures the computations only occur if the selectedSort changes


  return (
    <div>
      <Search
        search={search}
        onSearchChange={setSearch}
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
      />
      <AddTransactionForm />
      {error ? (
        <h1>An error occurred while fetching transactions.</h1>
      ) : (
        <TransactionsList transactions={transactionsToDisplay} />
      )}
    </div>
  );
}

export default AccountContainer;
