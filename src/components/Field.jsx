import React from 'react';

export default function Field(props) {
    console.log(props);
    return(
        
        <tr className = {props.className}>
            <td>{props.transaction}</td>
            <td>{props.amount}</td>
            <td><input id = 'income-edit-button' type = 'button' value = 'Edit' onClick = {props.edit}/></td>
            <td><input id = 'income-delete-button' type = 'button' value = 'delete' onClick = {props.delete}/></td>
        </tr>
    );
}