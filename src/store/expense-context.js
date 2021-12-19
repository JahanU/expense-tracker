import React, { useState } from 'react';

const tempExpenses = [
    { id: Math.random(), title: 'Rent', amount: 700, date: new Date() },
];

const ExpenseContext = React.createContext({
    onAddNewExpense: (title, amount, date) => { },
    onDeleteNewExpense: (id) => { },
    expenses: [],
});


export function ExpenseContextProvider(props) {

    const [expenses, setExpenses] = useState(tempExpenses);

    const addNewExpenseHandler = (newExpense) => {
        setExpenses((prevState) => {
            return [newExpense, ...prevState]
        });
    }

    const deleteNewExpenseHandler = (id) => {
        setExpenses((prev) => {
            return prev.filter(expense => expense.id !== id);
        });
    }


    return (
        <ExpenseContext.Provider value={
            {
                onAddNewExpense: addNewExpenseHandler,
                onDeleteNewExpense: deleteNewExpenseHandler,
                expenses: expenses,
            }
        }>
            {props.children}
        </ ExpenseContext.Provider>
    )
}

export default ExpenseContext;
