import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';
import react, { useState } from 'react';

function NewExpense(props) {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        }
        props.onAddNewExpense(expenseData);
        setShowForm(false);
    }

    const addNewExpenseButtonHandler = () => {
        setShowForm((prevState) => {
            return !prevState;
        });
    }

    return (
        <div className='new-expense'>
            {!showForm && <NewExpenseForm onSaveExpenseData={saveExpenseHandler} onCancelNewExpense={addNewExpenseButtonHandler} />}
            {showForm && <button onClick={addNewExpenseButtonHandler}> Add New Expense</button>}
        </div >
    );
}

export default NewExpense;
