import reducerCreator from "../../helper/reducer-creator";
import { UPDATE_PROFILE } from "./action";
import produce from "immer";

const initialState = {
  id: null,
  name: null,
  quickIntroduction: null,
  about: {
    heading: null,
    mainIntroduction: null,
    extendedIntroduction: null,
    techStacks: []
  },
  experience: {
    heading: "",
    employments: []
  },
  work: {},
  contacts: []
};

export const updateProfile = produce((draft, actions) => {
  const {
    id,
    name,
    quickIntroduction,
    contacts,
    about,
    experience
  } = actions.payload.profile;
  draft.id = id;
  draft.name = name;
  draft.quickIntroduction = quickIntroduction;
  draft.contacts = contacts;
  draft.about = about;
  draft.experience = experience;
});

const reducer = reducerCreator(initialState, {
  [UPDATE_PROFILE]: updateProfile
});

export default reducer;
