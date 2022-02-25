import React, { useState } from 'react';

import './expneseForm.scss'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: e.target.value,
        //     }
        // });
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount: e.target.value,
        //     }
        // });
    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredDate: e.target.value,
        //     }
        // });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" id='amount' />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" id='date' />
                </div>
                <div className="new-expense__action">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}


export default ExpenseForm;