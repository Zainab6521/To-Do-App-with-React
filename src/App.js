import react, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Learn React.",
    amount: 261.67,
    date: new Date(2021, 10, 8),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 261.67,
    date: new Date(2021, 5, 18),
  },
  {
    id: "e3",
    title: "pick Abbiiiii",
    amount: 100,
    date: new Date(2021, 9, 19),
  },
  {
    id: "e4",
    title: "New MObile",
    amount: 450000,
    date: new Date(2022, 4, 22),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
 
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;