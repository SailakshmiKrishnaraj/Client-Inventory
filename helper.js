// // import { getYear } from 'date-fns';
// // import store from '../state/store/index';
// // import { range } from "moment"

// // export const userReducerState = () => {
// //   return store.getState().userReducer;
// // }

// // export const customStyles = {
// //   menu: (provided, state) => ({
// //     ...provided,
// //     border: '1px solid $headerColor !important',
// //     color: '#212529',
// //     boxShadow: '0px 0px 4px 1px #ef4641'
// //   }),
// //   // dropdownIndicator: () => ({
// //   //   opacity: '1'
// //   // }),
// //   // option: (provided, state) => ({
// //   //   ...provided,
// //   //   border: '1px solid $headerColor !important',
// //   //   boxShadow: 'none !important',
// //   //   width: '100%',
// //   //   height: 'calc(1.5em + 0.5rem + 2px) !important',
// //   //   borderBottom: '1px dotted pink',
// //   //   color: '#212529'
// //   // }),
// //   // control: () => ({
// //   //   // none of react-select's styles are passed to <Control />
// //   //   border: '1px solid $headerColor !important',
// //   //   boxShadow: 'none !important',
// //   //   width: '100%',
// //   //   height: 'calc(1.5em + 0.5rem + 2px) !important',
// //   //   borderBottom: '1px dotted pink',
// //   //   color: '#212529'
// //   // }),
// //   // container: () => ({
// //   //   border: '1px solid $headerColor !important',
// //   //   boxShadow: 'none !important',
// //   //   width: '100%',
// //   //   height: 'calc(1.5em + 0.5rem + 2px) !important',
// //   //   borderBottom: '1px dotted pink',
// //   //   color: '#212529'
// //   // }),
// //   singleValue: (provided, state) => {
// //     const opacity = state.isDisabled ? 0.5 : 1;
// //     const transition = 'opacity 300ms';
// //     return { ...provided, opacity, transition };
// //   }

// // }

// // export let CheckAuthorizedUser = (Role, history) => {
// //   const session_token = userReducerState().token ? userReducerState().token : null;
// //   if (session_token && session_token !== null && session_token !== undefined) {

// //     if (Role && Role !== "" && Role !== undefined) {
// //       if (Role.toLowerCase() === "admin" || Role.toLowerCase() === "viewer") {
// //         return true;
// //       }
// //       else {
// //         // history.push('/unauthorized');
// //         return false;
// //       }
// //     }
// //     else {
// //       //history.push('/unauthorized');
// //       return false;
// //     }
// //   }
// //   else {
// //     // history.push('/unauthorized');
// //     return false;
// //   }
// // }
