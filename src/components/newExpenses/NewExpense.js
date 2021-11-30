import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

function NewExpense(props) {

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        }

        props.onAddNewExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <NewExpenseForm onSaveExpenseData={saveExpenseHandler} />
        </div>
    );
}

export default NewExpense;
