import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpenses/NewExpense';
import { useState } from 'react';

const tempExpenses = [
  { id: Math.random(), title: 'Rent', amount: 700, date: new Date() },
];

function App() {

  const [expenses, setExpenses] = useState(tempExpenses);

  const addNewExpenseHandler = (newExpense) => {
    setExpenses((prevState) => {
      return [newExpense, ...prevState]
    });
  }

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
