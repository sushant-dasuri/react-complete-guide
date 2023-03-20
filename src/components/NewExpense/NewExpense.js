import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [editForm, setEditForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setEditForm(false);
  };

  const noSubmitHandler = () => {
    setEditForm(false);
  }

  const toggleFormHandler = () => {
    setEditForm(true);
  }

  if(!editForm) {
    return (
      <div className='new-expense'>
      <button onClick={toggleFormHandler}>Add Expenses</button>
    </div>
    )
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={noSubmitHandler} />
    </div>
  );
};

export default NewExpense;
