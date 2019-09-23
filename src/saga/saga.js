import { takeLatest, put, call, all } from "redux-saga/effects";
import { getLogin } from "../API";

function* loginAsync(action) {
  const token = yield call(getLogin, action.payload);
  console.log(token.data.success);
  if (token === undefined) {
    yield put({ type: "SERVER_OFF" });
  }
  if (token.data.success === 1) {
    yield put({ type: "LOGIN_TRUE", payload: token.data });
  }
  if (token.data.success === 0) {
    yield put({ type: "LOGIN_FAIL", payload: token.data });
  }
}

export function* watcher() {
  yield all([yield takeLatest("LOGIN_AUTH", loginAsync)]);
}
