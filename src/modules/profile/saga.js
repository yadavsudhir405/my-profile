import { all, takeEvery } from "redux-saga/effects";
import { GET_PROFILE } from "./action";

export function* getProfileSaga() {}

export default function* profileSaga() {
  yield all([takeEvery(GET_PROFILE, getProfileSaga)]);
}
