import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';
import './Expenses.css';
import ExpenseFilter from '../expensesFilter/ExpenseFilter';
import { useState } from 'react';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const onExpenseFilterHandler = (filteredYear) => {
        setFilteredYear(filteredYear);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selectedYear={filteredYear} onExpenseFilter={onExpenseFilterHandler} />
                <ExpenseItem expense={props.expenses[0]} />
                <ExpenseItem expense={props.expenses[1]} />
                <ExpenseItem expense={props.expenses[2]} />
                <ExpenseItem expense={props.expenses[3]} />
            </Card>
        </div>
    );
}

export default Expenses;
