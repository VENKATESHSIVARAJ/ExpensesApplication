import {DELETE} from '../store/action';
export function deleteRecordHandler(index, dispach) {
    dispach({type: DELETE, payload: index});
}