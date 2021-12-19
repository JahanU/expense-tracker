import { useState } from 'react';
import './Expenses.css';
import Card from '../ui/Card';
import ExpenseFilter from '../expensesFilter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import React, { useContext } from 'react';
import ExpenseContext from '../../store/expense-context';

function Expenses() {

    const expenseContext = useContext(ExpenseContext);
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());

    const onExpenseFilterHandler = (filteredYear) => {
        setFilteredYear(filteredYear);
    };

    const filteredExpenses = expenseContext.expenses.filter((expense) =>
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
