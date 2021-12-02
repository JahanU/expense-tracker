import './ExpenseFilter.css';

function ExpenseFilter(props) {

    const dropdownChangeHandler = (event) => {
        let { name, value } = event.target;
        props.onExpenseFilter(value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter-control'>
                <label>Filter By Year</label>
                <select value={props.selectedYear} onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;