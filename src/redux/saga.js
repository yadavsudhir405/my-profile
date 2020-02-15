import { fork } from "redux-saga/effects";

import { profileSaga } from "../modules/profile";

export default function* rootSaga() {
  yield fork(profileSaga);
}
