import reducerCreator from "../../helper/reducer-creator";
import { UPDATE_PROFILE } from "./action";
import produce from "immer";

const initialState = {
  id: "",
  contacts: []
};

export const updateProfile = produce((draft, action) => {
  const { profile } = action.payload;
  draft.profile = profile;
});

const reducer = reducerCreator(initialState, {
  [UPDATE_PROFILE]: updateProfile
});

export default reducer;
