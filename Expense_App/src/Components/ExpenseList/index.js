import React, { useState } from "react";

import "./style.css";
import ExpenseItem from "../ExpenseItem";


function ExpenseList(props) {
  const handleDelete = (itempButton) => {
    let current = props.dataExpense;
    current = current.filter(
      (item) =>
        item.name !== itempButton.name
    );
    props.setData(current);
  };
  return (
    <div className="expense-list">
      {props.dataExpense.map((item, index) => {
        return (
          <div className="include">
            <ExpenseItem
              key={index}
              year={item.year}
              month={item.month}
              day={item.day}
              name={item.name}
              amount={item.amount}
            />
            <button onClick={() => handleDelete(item)}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ExpenseList;
