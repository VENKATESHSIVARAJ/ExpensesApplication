import React from 'react';

export default function Total(props) {
    
    function calculateTotal() {
        var total = 0;

        for(const expense of props.expenses) {
            if(expense.getCashFlow() === "Credit") {
                total = parseInt(total, 10) + parseInt(expense.getAmount());
            }
            else if(expense.getCashFlow() === "Debit") {
                total = parseInt(total, 10) - parseInt(expense.getAmount());
            }
        }

        return total;
    }

    return(
        <tr className = {props.className}>
            <td>Total </td>
            <td>{calculateTotal()}</td>
        </tr>
    );

}