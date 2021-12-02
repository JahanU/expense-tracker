import ExpenseDate from './ExpenseItemDate';
import Card from '../ui/Card';
import './ExpenseItem.css';

function ExpensiveItem(props) { // stateless/dumb/presentation component 
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.expense.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.expense.title}</h2>
                <div className='expense-item__price'>£{props.expense.amount}</div>
            </div>
        </Card>
    );
}

export default ExpensiveItem;
