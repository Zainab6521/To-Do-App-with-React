import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from './Components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
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
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
