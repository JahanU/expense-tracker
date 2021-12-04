import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpenses/NewExpense';
import { useState } from 'react';

const tempExpenses = [
  { id: 'e1', title: 'Rent', amount: 10, date: new Date('01/04/2019') },
  { id: 'e2', title: 'Spending', amount: 200, date: new Date('02/04/2019') },
  { id: 'e3', title: 'Groceries', amount: 140, date: new Date('03/04/2020') },
  { id: 'e4', title: 'Bills', amount: 60, date: new Date('04/04/2020') },
  { id: 'e5', title: 'Bills 2', amount: 60, date: new Date('05/04/2020') },
  { id: 'e6', title: 'Bills 3', amount: 90, date: new Date('06/01/2020') },
  { id: 'e7', title: 'Bills 4', amount: 90, date: new Date('07/01/2021') },
  { id: 'e8', title: 'Bills 4', amount: 120, date: new Date('08/01/2021') },
  { id: 'e9', title: 'Bills 4', amount: 200, date: new Date('09/01/2021') },
  { id: 'e10', title: 'Bills 4', amount: 60, date: new Date('10/01/2022') },
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
