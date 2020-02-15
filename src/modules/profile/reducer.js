import reducerCreator from "../../helper/reducer-creator";
import { UPDATE_PROFILE } from "./action";
import produce from "immer";

const initialState = {
  id: "",
  contacts: []
};

export const updateProfile = produce((draft, actions) => {
  const { profile } = actions.payload;
  draft.id = profile.id;
  draft.contacts = profile.contacts;
});

const reducer = reducerCreator(initialState, {
  [UPDATE_PROFILE]: updateProfile
});

export default reducer;
