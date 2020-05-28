import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux';

import {EDIT} from '../store/action';
import './EditExpensePage.css';

var dispatch;

export default function EditExpensePage (props) {

    dispatch = useDispatch();

    const[value, setValue] = useState(0);

    useEffect(() => {
        setValue(props.editValue);
    }, [props.editValue])
    
    function onChangeEvent(event) {
        setValue(event.target.value);
    }

    
    function saveEvent() {
        props.displayHomePage();
        dispatch({type: EDIT, payload: [value, props.editIndex]});
    }


    return (

        <div className = "incomePanel">
                <table className = "table">
                    <tbody>
                        <tr className = "tablerow">
                            <td><span>Amount : </span></td>
                            <td>
                            <input id = 'edit-income-textbox' type = 'text' value = {value} onChange = {(event) => {onChangeEvent(event)}} />
                            </td>
                        </tr>
                        <tr className = "tablerowbutton">
                            <td><input id = 'edit-income-button' type = 'button' value = 'save' onClick = {saveEvent}/></td>
                            <td><input id = 'cancel-income-button' type = 'button' value = 'Cancel' onClick = {props.displayHomePage}/></td>
                        </tr>
                    </tbody>
                </table>
                 
                
                <br></br>
                
                <br></br>
                
            </div>

    );
}


