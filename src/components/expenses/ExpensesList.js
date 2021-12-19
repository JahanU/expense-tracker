import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props) {

    if (props.expenses.length === 0) {
        return <h2 className='no-expenses'> No Expenses found for {props.selectedYear} </h2>
    }

    return (
        <ul className='expenses-list'>
            {props.expenses.map((expense) =>
                <ExpenseItem key={expense.id} expense={expense} />)}
        </ul>
    );
}

export default ExpensesList;