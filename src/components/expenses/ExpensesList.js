import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
import ExpenseContext from '../../store/expense-context';

function ExpensesList(props) {

    const expenseContext = useContext(ExpenseContext)

    if (expenseContext.expenses.length === 0) {
        return <h2 className='no-expenses'> No Expenses found for {props.selectedYear} </h2>
    }

    return (
        <ul className='expenses-list'>
            {expenseContext.expenses.map((expense) =>
                <ExpenseItem key={expense.id} expense={expense} />)}
        </ul>
    );
}

export default ExpensesList;