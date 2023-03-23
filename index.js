import { userConstants } from "../../constants/userConstants";
export function setTableData(data) {
    return { type: userConstants.USERCREDENTIALS.SET_TABLE, payload: { data } };
}
export function viewPopupdata(data){
    debugger;
    return {type:userConstants.USERCREDENTIALS.VIEW_DATA,payload: {data}}
}
export function ShowData() {
    return { type: userConstants.USERCREDENTIALS.SHOW };
}
export function HideData() {
    return { type: userConstants.USERCREDENTIALS.HIDE };
}