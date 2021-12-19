import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';
import React, { useState } from 'react';

function NewExpense() {

    const [showForm, setShowForm] = useState(false);

    const addNewExpenseButtonHandler = () => {
        setShowForm((prevState) => {
            return !prevState;
        });
    }

    return (
        <div className='new-expense'>
            {!showForm && <NewExpenseForm onCancelNewExpense={addNewExpenseButtonHandler} />}
            {showForm && <button onClick={addNewExpenseButtonHandler}> Add New Expense</button>}
        </div >
    );
}

export default NewExpense;
