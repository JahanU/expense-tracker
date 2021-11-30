import './ExpenseForm.css';

function ExpenseForm() {

    return (
        <form>
            <div className='new-expense-controls'>
                <div className='new-expense-control'>
                    <label>Title</label>
                    <input type='text' />
                </div>
                <div className='new-expense-control'>
                    <label>Amount</label>
                    <input type='number' min='0.1' step='0.01' />
                </div>
                <div className='new-expense-control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' />
                </div>
            </div>
            <div className='new-expense-actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
