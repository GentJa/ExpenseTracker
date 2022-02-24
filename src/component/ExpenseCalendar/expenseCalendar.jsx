import React from 'react';

import './expenseCalendar.scss'

const ExpenseCalendar = ({ date }) => {
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.toLocaleString('en-US', { year: 'numeric' });

    return (
        <div>
            <div className='month'>{month}</div>
            <div className='year'>{year}</div>
            <div className='day'>{day}</div>
        </div>
    )
}


export default ExpenseCalendar;