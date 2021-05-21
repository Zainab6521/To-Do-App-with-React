import React, { useState } from "react";
import NewExpense from "../NewExpense/NewExpense";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log('evaluated by react state');
  // let title = props.title;

  const clickHandler = () => {
    setTitle('Updated!')
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>click me</button>
    </div>
  );
};

export default ExpenseItem;
