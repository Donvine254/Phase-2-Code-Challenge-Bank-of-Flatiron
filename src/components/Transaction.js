import React from "react";
import Swal from "sweetalert2";
import { baseUrl } from "./AccountContainer";

function Transaction({ transaction }) {
  function handleDelete(transaction) {
    Swal.fire({
      title: "Are You Sure",
      icon: "warning",
      text: `This action will delete ${transaction.description} from the database`,
      showCancelButton: "true",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Success",
          icon: "success",
          text: "Transaction deleted successfully!",
          timer: 3000,
        });
        fetch(`${baseUrl}/${transaction.id}`, {
          method: "DELETE",
        });
      }
    });
  }

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
        <button
          className="ui button red"
          onClick={() => handleDelete(transaction)}>
          <i className="trash icon"></i>
        </button>
      </td>
    </tr>
  );
}

export default Transaction;
