import ExpenseItem from '../src/component/expenseItem/expenseItem'
import './App.css';
import expenses from '../src/component/expensesData';
import Card from './component/Card/card';
import NewExpense from './NewExpenses/newExpenses';

function App() {

 const expensData =  expenses;

 const addExpensHandler = expense => {
   console.log('in app.js');
   console.log(expense);
 }
//  console.log(expensData);
  return (
    <Card className="expenses">
      <NewExpense onAddExpense = {addExpensHandler}/>
      <ExpenseItem 
      title={expensData[0].title}
      amount={expensData[0].amount}
      date={expensData[0].date}
      />
      <ExpenseItem 
      title={expensData[1].title}
      amount={expensData[1].amount}
      date={expensData[1].date}/>
      <ExpenseItem 
      title={expensData[2].title}
       amount={expensData[2].amount}
       date={expensData[2].date}/>
       
    </Card>
  );
}

export default App;
