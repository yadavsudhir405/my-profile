import { all, put, call, takeEvery } from "redux-saga/effects";
import { GET_PROFILE, updateProfile } from "./action";
import { fetchProfile } from "./api";

export function* getProfileSaga() {
  const profile = yield call(fetchProfile);
  if (profile) {
    yield put(updateProfile(profile[0]));
  }
}

export default function* profileSaga() {
  yield all([takeEvery(GET_PROFILE, getProfileSaga)]);
}
