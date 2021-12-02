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
                {props.expenses.map((expense) => <ExpenseItem expense={expense} />)}
            </Card>
        </div>
    );
}

export default Expenses;
