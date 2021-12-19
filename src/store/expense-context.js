import React, { useState } from 'react';

const tempExpenses = [
    { id: Math.random(), title: 'Rent', amount: 700, date: new Date('08/08/2021') },
];

const ExpenseContext = React.createContext({
    onAddNewExpense: (title, amount, date) => { },
    onDeleteNewExpense: (id) => { },
    expenses: [],
});


export function ExpenseContextProvider(props) {

    const initalExpenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : tempExpenses;
    initalExpenses.map(expense => expense.date = new Date(expense.date));

    const [expenses, setExpenses] = useState(initalExpenses);

    const addNewExpenseHandler = (newExpense) => {
        setExpenses((prevState) => {
            localStorage.setItem('expenses', JSON.stringify([...prevState, newExpense]));
            return [newExpense, ...prevState]
        });
    }

    const deleteNewExpenseHandler = (id) => {
        setExpenses((prev) => {
            const filteredExpenses = prev.filter(expense => expense.id !== id);
            localStorage.setItem('expenses', JSON.stringify([...filteredExpenses]));
            return filteredExpenses;
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
