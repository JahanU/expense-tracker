import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpenses/NewExpense';
import useState from 'react';

function App() {

  const expenses = [
    { id: 'e1', title: 'Rent', amount: 600, date: new Date('01/01/2021') },
    { id: 'e2', title: 'Spending', amount: 200, date: new Date('01/01/2021') },
    { id: 'e3', title: 'Groceries', amount: 140, date: new Date('01/01/2021') },
    { id: 'e4', title: 'Bills', amount: 60, date: new Date('01/01/2021') },
  ];

  const onAddNewExpenseHandler = (enteredNewExpense) => {
    expenses.push(enteredNewExpense);

  }

  return (
    <div>
      <NewExpense onAddNewExpense={onAddNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
