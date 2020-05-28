import React, {useState} from 'react';
import Income from './components/Income'
import EditExpensePage from './components/EditExpensePage';
//import Test from './components/Test'
import ExpensesList from './components/ExpensesList';
import './App.css';

var editIndex;
var editValue;

function App() {
  const [editPage, setEditPage] = useState(false);
  
  const displayEditPage = (index, value) => {
    setEditPage(true);
    editIndex = index;
    editValue = value[index].getAmount();

  }
  const displayHomePage = () => {
    setEditPage(false);
  }
  return (

    <div>
      <header className = "header">Expense Calculator</header>
      {
        editPage === true ? (
          (<EditExpensePage editIndex = {editIndex} editValue = {editValue} displayHomePage = {displayHomePage} />)
          ) : (
            (
            <div>
              <Income />
              <ExpensesList displayEditPage = {displayEditPage}/>
            </div> )
            )
      }
    </div>
  );
}



export default App;
