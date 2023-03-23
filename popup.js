import { setTableData ,viewPopupdata,ShowData,HideData} from "../state/actions";
import { GetInventoryData} from '../services';
export const setData = () => {
    return async (dispatch) => {
        try {
            const response = await GetInventoryData();
            dispatch(setTableData(response.data));
        }
        catch (error) {
            
            console.log("Set NewData API Error found!", "Please Check request path");
            console.log(error);
        }
    }
}
export const Hidepopup = () => {
    return async (dispatch) => {
        dispatch(HideData());
    }
}
export const Showpopup = () => {
    return async (dispatch) => {
        dispatch(ShowData());
    }
}
export const ViewData = (rowData) => {
    return async (dispatch) => {
        debugger;
        dispatch(viewPopupdata(rowData));
    }
}

