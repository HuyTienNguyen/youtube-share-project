import { Cookies } from "react-cookie";
import serviceUser from "../../services/user";
import { IUserLoginResponse } from "../response.tye";
import { IAction } from "../type";
import { signIn, signInFail, signInSuccess } from "./slice";
import { ISignInAction } from "./type";
import { delay, put, takeLeading } from "redux-saga/effects";

function* signInWorker(action: IAction<ISignInAction>) {
  try {
    const { username, password } = action.payload;
    const loginReponse: IUserLoginResponse = yield serviceUser.login(
      username,
      password
    );
    if (loginReponse) {
      const { accessToken } = loginReponse;
      serviceUser.storeAccessToken(accessToken);

      yield put({ type: signInSuccess.toString(), payload: accessToken });
    }
  } catch (error) {
    yield put({ type: signInFail.toString() });
  }
}

function* authWatcher() {
  yield takeLeading(signIn.toString(), signInWorker);
}

export default authWatcher;
