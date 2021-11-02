export const LOGIN = "LOGIN";
export const SETLIST = "SETLIST";
export const DELETE_ITEM = "DELETE_ITEM";
export const setList = (data) => {
  console.log("insde actino", data);
  return {
    type: SETLIST,
    payload: data,
  };
};

export const login = () => {
  return {
    type: LOGIN,
  };
};
