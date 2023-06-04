import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions }) {
  return (
    <table className="ui celled striped padded table">
      <thead>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {transactions ? (
          transactions.length > 0 ? (
            transactions.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))
          ) : (
            <tr>
              <td colSpan="4">
                <h3 className="ui centered header">
                  No transactions available
                </h3>
              </td>
            </tr>
          )
        ) : (
          <tr>
            <td colSpan="4">
              <p>Loading transactions...</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TransactionsList;
