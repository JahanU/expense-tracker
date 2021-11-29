import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses() {
    const expenses = [
        { id: 'e1', title: 'Rent', amount: 600, date: new Date('01/01/2021') },
        { id: 'e2', title: 'Spending', amount: 200, date: new Date('01/01/2021') },
        { id: 'e3', title: 'Groceries', amount: 140, date: new Date('01/01/2021') },
        { id: 'e4', title: 'Bills', amount: 60, date: new Date('01/01/2021') },
    ];


    return (
        <Card className='expenses'>
            <ExpenseItem expense={expenses[0]} />
            <ExpenseItem expense={expenses[1]} />
            <ExpenseItem expense={expenses[2]} />
            <ExpenseItem expense={expenses[3]} />
        </Card>
    );
}

export default Expenses;
