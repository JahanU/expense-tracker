import Chart from '../Chart/Chart';
import React, { useContext } from 'react';
import ExpenseContext from '../../store/expense-context';
function ExpenseChart(props) {

    const expenseContext = useContext(ExpenseContext);

    const chartExpenseData = [
        { id: '0', label: 'Jan', value: 0, },
        { id: '1', label: 'Feb', value: 0, },
        { id: '2', label: 'Mar', value: 0, },
        { id: '3', label: 'Apr', value: 0, },
        { id: '4', label: 'May', value: 0, },
        { id: '5', label: 'Jun', value: 0, },
        { id: '6', label: 'Jul', value: 0, },
        { id: '7', label: 'Aug', value: 0, },
        { id: '8', label: 'Sep', value: 0, },
        { id: '9', label: 'Oct', value: 0, },
        { id: '10', label: 'Nov', value: 0, },
        { id: '11', label: 'Dec', value: 0, },
    ]

    let maxValue = 0;

    for (const expense of expenseContext.expenses) {
        const month = expense.date.getMonth();
        chartExpenseData[month].value += expense.amount;
        maxValue = Math.max(maxValue, chartExpenseData[month].value);
    }


    return (
        <Chart dataPoints={chartExpenseData} maxValue={maxValue} />
    )
}


export default ExpenseChart;