import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';
import React, { useState, useContext } from 'react';
import ExpenseContext from '../../store/expense-context';

function NewExpense() {

    const expenseContext = useContext(ExpenseContext);
    const [showForm, setShowForm] = useState(false);

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random(),
            ...enteredExpenseData
        }
        expenseContext.onAddNewExpense(expenseData);
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
