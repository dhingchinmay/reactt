import { LOGIN, SETLIST, DELETE_ITEM } from "../actions/uiActions";

const intialState = {
  isLoggedIn: false,
  employeeList: [],
  count: 0,
};

const uiReducer = (state = intialState, action) => {
  switch (action.type) {
    case SETLIST:
      return {
        ...state,
        employeeList: [...state.employeeList, ...action.payload],
      };
    case LOGIN:
      console.log("check login reducer");
      return { ...state, isLoggedIn: true };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default uiReducer;
