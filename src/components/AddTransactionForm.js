import React, { useState } from "react";
import Swal from "sweetalert2";
import { baseUrl } from "./AccountContainer";

function AddTransactionForm() {
  //initialize form data as an a object to avoid having repetitive onChange functions
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  });
  //single function to handle change
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  
  }
  //function to handleFormSubmission

  function handleSubmit(event) {
    event.preventDefault();
    const isEmpty = Object.values(formData).some((value) => value === ""|| value===0); //checking for empty values
    if (isEmpty) {
      Swal.fire({
        title: "An error occurred",
        icon: "error",
        text: "Please fill out all fields before submitting!",
        showCloseButton: true,
        showCancelButton: true,
        timer: 3000,
      });
      return;
    }
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() =>
        Swal.fire({
          icon: "success",
          text: "Transaction added successfully!",
          title: "success",
          showCloseButton: true,
          timer: 3000,
        })
      );
     
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: 0,
    });
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
