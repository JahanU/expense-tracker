import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';
import './Expenses.css';
import ExpenseFilter from '../expensesFilter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const onExpenseFilterHandler = (filteredYear) => {
        setFilteredYear(filteredYear);
    };

    const filteredExpenses = props.expenses.filter((expense) =>
        expense.date.getFullYear().toString() === filteredYear);

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selectedYear={filteredYear} onExpenseFilter={onExpenseFilterHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList selectedYear={filteredYear} expenses={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;
