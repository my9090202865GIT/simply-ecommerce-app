import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSlice } from "../../models/AuthSlice";

interface LoginProps {
  username: string;
  password: string;
}

const initialState: AuthSlice = {
  isLoggedIn:
    localStorage.getItem("username") !== null &&
    localStorage.getItem("username") !== undefined &&
    localStorage.getItem("username") !== "",
  modalOpen: false,
  username: localStorage.getItem("username") ?? "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    updateModal: (state, action: PayloadAction<boolean>) => {
      // console.log(action.payload)
      return { ...state, modalOpen: action.payload };
    },
    doLogin: (state, action: PayloadAction<LoginProps>) => {
      if (
        action.payload.username === "z" &&
        action.payload.password === "x"
      ) {
        localStorage.setItem("username", "z");
        return {
          ...state,
          username: "z",
          modalOpen: false,
          isLoggedIn: true,
        };
        // state.username = "z"
        // state.modalOpen = false
        // state.isLoggedIn = true
      } else {
        return state;
      }
    },
    doLogout: (state) => {
      localStorage.removeItem("username");
      return { ...state, username: "", isLoggedIn: false };
    },
  },
});

export const { updateModal, doLogin, doLogout } = authSlice.actions;
export default authSlice.reducer;
