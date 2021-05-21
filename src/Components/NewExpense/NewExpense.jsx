import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
  console.log('hello g')
  return (
    <div className='new-expense'>
      <ExpenseForm />

    </div>
  );
};

export default NewExpense;