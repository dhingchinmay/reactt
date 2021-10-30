import { LOGIN, SETLIST } from "../actions/uiActions";

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
      return { ...state, isLoggedIn: true };

    default:
      return state;
  }
};

export default uiReducer;
