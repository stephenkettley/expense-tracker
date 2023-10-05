// this is the expense item component

import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title); // hooks start with the word use (called directly inside component function)

  // useState always returns an array of 2 values (first is current state value, second is a function to update)

  const clickHandler = () => {
    setTitle("Updated Title With Button");
  }; // use the keyword Handler to indicate we don't call this function ourselves

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
