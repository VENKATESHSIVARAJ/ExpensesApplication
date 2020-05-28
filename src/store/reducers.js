import {ADD, DELETE, EDIT} from './action';
const initialState = {
    expenseDetails : []
}

const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ADD: 
            return( {
                 expenseDetails: [...state.expenseDetails, action.payload ]
            });
        case DELETE: 
            state.expenseDetails.splice(action.payload, 1);
            return( {
                 expenseDetails: [...state.expenseDetails]
            });
        case EDIT: 
            const expensesDetails = state.expenseDetails;
            expensesDetails[action.payload[1]].setAmount(action.payload[0]);
            return( {
                 expenseDetails: [...expensesDetails]
            });
        default:
            return state;

    }
}

export default reducer;

