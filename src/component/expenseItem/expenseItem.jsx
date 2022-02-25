import React, { useState } from 'react';
import './expenseItem.scss'
import ExpenseCalendar from '../ExpenseCalendar/expenseCalendar'
import Card from '../Card/card';
const ExpenseItem = ({ title, amount, date }) => {

    const [titleChanged, setTitle] = useState(title);
    const clickedHandler = () => {
        setTitle('Updated!')
    }

    return (
        <Card className='expense-item'>
            <div className='expense-item__description'>
                <ExpenseCalendar date={date} />
            </div>
            <div className='expense-item__about'>
                <h2>{titleChanged}</h2>
                <div className='expense-item__price'>{amount}</div>
            </div>
            <button onClick={clickedHandler}>Change Title</button>
        </Card>
    )
}
export default ExpenseItem;