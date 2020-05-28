import React from 'react';
import {useDispatch} from 'react-redux';
import Expences from '../model/Expenses'
import {ADD} from '../store/action';

import './Income.css';

var dispach;
export default function Income() {   
    dispach = useDispatch();
        return(
            <div className = "incomePanel">
                <table className = "table">
                    <tbody>
                        <tr className = "tablerow">
                            <td><span>Amount : </span></td>
                            <td><input id = 'income-textbox' type = 'text' /></td>
                        </tr>
                        <tr className = "tablerow">
                            <td><span>Type : </span></td>
                            <td>
                            <select id="income-dropdown" className = "dropdown">
                                <option value="Credit">Credit</option>
                                <option value="Debit">Debit</option>
                            </select>
                            </td>
                        </tr>
                        <tr className = "tablerowbutton">
                            <td><span></span></td>
                            <td><input id = 'income-button' className = "savebutton" type = 'button' value = 'Save' onClick = {incomeOnClick}/></td>
                        </tr>
                    </tbody>
                </table>
                 
                
                <br></br>
                
                <br></br>
                
            </div>
        );
}

function incomeOnClick(){
    var expenseAmount = document.getElementById('income-textbox').value;
    var expenseType = document.getElementById('income-dropdown').value;
    let obj = new Expences(expenseType, expenseAmount);
    dispach({type: ADD, payload: obj});
}
