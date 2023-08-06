import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EActionStatus } from "../type";
import { IAuthState, ISignInAction } from "./type";
import serviceUser from "../../services/user";

const initialState: IAuthState = {
  status: EActionStatus.Idle,
  jwtAuth: null,
  isAuthenticated: !!serviceUser.getAccessToken(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state: IAuthState, _: PayloadAction<ISignInAction>) => {
      state.status = EActionStatus.Pending;
    },
    signInSuccess: (
      state: IAuthState,
      action: PayloadAction<{ jwtToken: string }>
    ) => {
      state.status = EActionStatus.Succeeded;
      state.isAuthenticated = true;
      state.jwtAuth = action.payload.jwtToken;
    },
    signInFail: (state: IAuthState) => {
      state.status = EActionStatus.Failed;
    },
  },
});

export const { signIn, signInSuccess, signInFail } = authSlice.actions;

export default authSlice.reducer;
