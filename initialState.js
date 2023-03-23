import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
export const PopupState = {
  show: false,
  data: [],
  rowdata:[],
  action:"View"
}
const mockStore = configureMockStore([thunk]);
export const TestStore = mockStore({
  popup: PopupState
});