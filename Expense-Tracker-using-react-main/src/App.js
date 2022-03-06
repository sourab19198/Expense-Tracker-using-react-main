import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import "./App.css";
import pic from "./images/expensePic.jpg";

const DummyExpenses = [
  {
    id: "e1",
    title: "Book",
    amount: 350,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "Phone", amount: 20000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Pens",
    amount: 42.5,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Grocery",
    amount: 250,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Headphones",
    amount: 250,
    date: new Date(2022, 1, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DummyExpenses);

  const addExpenseHandler = (expense) => {
    // console.log("in app.js");
    // console.log(expense);

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <div>
        <h1>My Expense Tracker</h1>
      </div>

      <style>{"body { background-color: RebeccaPurple; }"}</style>
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
    </div>
  );
};

export default App;
