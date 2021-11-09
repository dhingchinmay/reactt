import { LOGIN, SETLIST, DELETE_ITEM, ADDEMPLOYEE } from "../actions/uiActions";

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

    case ADDEMPLOYEE:
      return {
        ...state,
        employeeList: state.employeeList.concat({
          _id: action.payload._id,
          Name: action.payload.Name,
          email: action.payload.email,
          phone: action.payload.phone,
        }),
      };

    case DELETE_ITEM:
      console.log("/* action payload */", action.payload);
      return {
        ...state,
        employeeList: state.employeeList.filter((item) => {
          return item._id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default uiReducer;
