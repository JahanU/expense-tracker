import ExpenseDate from './ExpenseItemDate';
import Card from '../ui/Card';
import './ExpenseItem.css';
import React, { useContext } from 'react';
import ExpenseContext from '../../store/expense-context';

function ExpensiveItem(props) {

    const expenseContext = useContext(ExpenseContext);

    const deleteItem = () => {
        expenseContext.onDeleteNewExpense(props.expense.id);
    }

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.expense.date}></ExpenseDate>
                <div className='expense-item__description'>
                    <h2>{props.expense.title}</h2>
                    <div className='expense-item__price'>£{props.expense.amount}</div>
                    <button onClick={deleteItem} className="btn"><i className="fa fa-trash"></i></button>
                </div>
            </Card>
        </li>
    );
}

export default ExpensiveItem;
