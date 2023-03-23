import { userConstants } from '../../constants/userConstants';
import { PopupState } from '../config/initialState';

export default function popupReducer(state = PopupState, action) {
    switch (action.type) {
        case userConstants.USERCREDENTIALS.HIDE:
            return { ...state, show: false};
        case userConstants.USERCREDENTIALS.SET_TABLE:
            return { ...state, data: action.payload.data };
        case userConstants.USERCREDENTIALS.VIEW_DATA:
            return { ...state, header: 'View', show: true, rowdata: action.payload.data, action: "View" };
        default:
            return state;
    }
}