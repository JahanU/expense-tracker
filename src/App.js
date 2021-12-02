import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpenses/NewExpense';
import { useState } from 'react';

const tempExpenses = [
  { id: 'e1', title: 'Rent', amount: 600, date: new Date('01/01/2019') },
  { id: 'e2', title: 'Spending', amount: 200, date: new Date('01/01/2020') },
  { id: 'e3', title: 'Groceries', amount: 140, date: new Date('01/01/2021') },
  { id: 'e4', title: 'Bills', amount: 60, date: new Date('01/01/2021') },
  { id: 'e5', title: 'Bills 2', amount: 60, date: new Date('01/01/2019') },
  { id: 'e6', title: 'Bills 3', amount: 60, date: new Date('01/01/2020') },
  { id: 'e7', title: 'Bills 4', amount: 60, date: new Date('01/01/2021') },

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
