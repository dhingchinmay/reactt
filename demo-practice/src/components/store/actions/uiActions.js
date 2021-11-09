import axios from "axios";

export const LOGIN = "LOGIN";
export const EDITEMPLOYEE = "EDITEMPLOYEE";
export const ADDEMPLOYEE = "ADDEMPLOYEE";
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

export const getAuthToken = () => {
  return "Bearer " + localStorage.getItem("Token");
};

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
      const token = localStorage.getItem("token");
      console.log(token);
      const resp = await axios.get("http://localhost:3001/employee/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("resposne", resp);
      if (resp.status === 200) {
        dispatch({
          type: SETLIST,
          payload: resp.data,
        });
      }
    } catch (error) {}
  };
};

export const deleteEmployee = (id) => {
  return async (dispatch) => {
    try {
      const resp = await axios.delete(`http://localhost:3001/employee/${id}`);
      console.log("resposne", resp);
      if (resp.status === 202) {
        dispatch({
          type: DELETE_ITEM,
          payload: id,
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
        return resp.status;
      }
    } catch (error) {}
  };
};

export const addemployee = ({ email, phone, name, dob, gender }) => {
  return async (dispatch) => {
    try {
      console.log("Add employee");
      const resp = await axios.post("http://localhost:3001/employee/add", {
        email,
        name,
        phone,
        dob,
        gender,
      });
      console.log("resp", resp);
      if (resp.status === 200) {
        dispatch({
          type: ADDEMPLOYEE,
          payload: resp.data.emp,
        });
      }
    } catch (error) {}
  };
};

export const editemployee = (id) => {
  return async (dispatch) => {
    try {
      console.log("Add employee");
      const resp = await axios.put(`http://localhost:3001/employee/${id}`);
      console.log("resp", resp);
      if (resp.status === 202) {
        dispatch({
          type: EDITEMPLOYEE,
          payload: resp.id,
        });
      }
    } catch (error) {}
  };
};
