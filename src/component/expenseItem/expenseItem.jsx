import React from 'react';
import './expenseItem.scss'
import ExpenseCalendar from '../ExpenseCalendar/expenseCalendar'
import Card from '../Card/card';
const ExpenseItem = ({ title, amount, date }) => {
    return (
        <Card className='expense-item'>
            <div className='expense-item__description'>
                <ExpenseCalendar date={date} />
            </div>
            <div className='expense-item__about'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
            </div>

        </Card>
    )
}
export default ExpenseItem;