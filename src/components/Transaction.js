import React from "react";
import Swal from "sweetalert2";
import { baseUrl } from "./AccountContainer";
import Axios from "axios";

function Transaction({ transaction }) {

  const {date, description, category, amount}= transaction

  function handleDelete(transaction) {
    Swal.fire({
      title: "Are You Sure?",
      icon: "warning",
      iconColor:"red",
      html: `This action will delete <strong> ${transaction.description}</strong> transaction from the database.`,
      showCancelButton: "true",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Success",
          icon: "success",
          text: "Transaction deleted successfully!",
          timer: 3000,
        });
        Axios.delete(`${baseUrl}/${transaction.id}`)
      }
    });
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
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
