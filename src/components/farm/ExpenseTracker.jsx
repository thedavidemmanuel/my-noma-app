import React from 'react';

const ExpenseTracker = ({ expenses, logExpense }) => {
  // Function to add a new expense
  const handleNewExpense = (expenseData) => {
    logExpense(expenseData);
  };

  return (
    <div className="expense-tracker">
      <h2>Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>{expense.description}: ₦{expense.amount}</li>
        ))}
      </ul>
      {/* UI to add new expenses */}
    </div>
  );
};

export default ExpenseTracker;
