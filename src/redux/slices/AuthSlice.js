//external import
import { createSlice } from "@reduxjs/toolkit";
import SessionHelper from "../../helper/SessionHelper";

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    AccessToken: SessionHelper.GetToken() || undefined,
  },
  reducers: {
    SetLogin: (state, action) => {
      SessionHelper.SetToken(action.payload);
      state.AccessToken = SessionHelper.GetToken() || undefined;
    },
    SetLogout: (state, action) => {
      SessionHelper.RemoveToken();
      state.AccessToken = SessionHelper.GetToken() || undefined;
    },
  },
});

export const { SetLogin, SetLogout } = AuthSlice.actions;
export default AuthSlice.reducer;
