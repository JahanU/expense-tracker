import ExpenseDate from './ExpenseItemDate';
import Card from '../ui/Card';
import './ExpenseItem.css';
import { useState } from 'react';

function ExpensiveItem(props) {

    const [title, setTitle] = useState(props.expense.title)

    const handleClick = () => {
        setTitle('New Title!');
        console.log(title);
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.expense.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <button onClick={handleClick}> click to update </button>
                <div className='expense-item__price'>£{props.expense.amount}</div>
            </div>
        </Card>
    );
}

export default ExpensiveItem;
