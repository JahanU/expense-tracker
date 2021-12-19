import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ExpenseContextProvider } from './store/expense-context';

ReactDOM.render(
    <ExpenseContextProvider>
        <App />
    </ExpenseContextProvider>
    , document.getElementById('root'));
