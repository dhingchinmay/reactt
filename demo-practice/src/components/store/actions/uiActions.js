import axios from "axios";

export const LOGIN = "LOGIN";
export const SETLIST = "SETLIST";
export const DELETE_ITEM = "DELETE_ITEM";
// export const setList = (data) => {
//   console.log("insde actino", data);
//   return {
//     type: SETLIST,
//     payload: data,
//   };
// };

// export const login = () => {
//   return {
//     type: LOGIN,
//   };
// };

export const checkLogin = () => {
  return async (dispatch) => {
    if (localStorage.getItem("token")) {
      console.log("check login if");
      dispatch({
        type: LOGIN,
      });
    }
  };
};

export const getAllEmployees = () => {
  return async (dispatch) => {
    try {
      const resp = await axios.get("http://localhost:3001/users/all");
      if (resp.status === 200) {
        dispatch({
          type: SETLIST,
          payload: resp.data,
        });
      }
    } catch (error) {}
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const resp = await axios.post("http://localhost:3001/users/login", {
        email,
        password,
      });
      let token = resp.data.token;
      localStorage.setItem("token", token);
      if (resp.status === 200) {
        dispatch({
          type: LOGIN,
        });
      }
    } catch (error) {}
  };
};
