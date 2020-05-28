import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {expensesSelector} from '../store/expensesSelector';
import Field from './Field';
import Total from './Total'
import {DELETE} from '../store/action';
import './ExpensesList.css';

var dispach;
var expenses;
export default function ExpensesList(props) {

    dispach = useDispatch();

    expenses = useSelector(expensesSelector);
    return(
        <div className = "expensesListPanel">
        <table className = "listtable">
            <thead>
            <tr className = "tablerow">
                <th >Transaction</th>
                <th >Amount</th>
            </tr>
            </thead>
            <tbody>
            {
                
                expenses.map((expense, index) => {
                    return(
                        <Field key = {index} 
                        className = "tablerow"
                        transaction = {expense.getCashFlow()} 
                        amount = {expense.getAmount()}
                        edit = {() => editRecordHandler(index, props.displayEditPage)}
                        delete = {() => deleteRecordHandler(index, dispach)} />
                    );
                })
            }
            </tbody>
            <tfoot>
                <Total className = "tablerow" expenses = {expenses} />
            </tfoot>
        </table>
        </div>
    );

}

function deleteRecordHandler(index, dispach) {
    dispach({type: DELETE, payload: index});
}

function editRecordHandler(index, displayEditPage) {
    displayEditPage(index, expenses);
}