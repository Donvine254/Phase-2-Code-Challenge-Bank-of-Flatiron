import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

export const baseUrl = "http://localhost:8001/transactions";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

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
  const transactionsToDisplay = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(search.toLowerCase())
  );

  function handleNewTransactions(newTransaction){
    // setTransactions((prevTD)=>[...prevTD, newTransaction])
    // console.log(newTransaction)
  }

  return (
    <div>
      <Search search={search} onSearchChange={setSearch} />
      <AddTransactionForm onFormSubmit={handleNewTransactions} />
      <TransactionsList transactions={transactionsToDisplay} />
    </div>
  );
}

export default AccountContainer;
