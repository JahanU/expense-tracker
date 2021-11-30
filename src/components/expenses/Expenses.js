import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';
import './Expenses.css';

function Expenses(props) {

    return (
        <Card className='expenses'>
            <ExpenseItem expense={props.expenses[0]} />
            <ExpenseItem expense={props.expenses[1]} />
            <ExpenseItem expense={props.expenses[2]} />
            <ExpenseItem expense={props.expenses[3]} />
        </Card>
    );
}

export default Expenses;
