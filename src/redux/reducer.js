import { combineReducers } from "redux";
import { profileReducer } from "../modules/profile";

const reducer = combineReducers({
  profile: profileReducer
});

export default reducer;
