import actionCreator from "../../helper/action-creator";

export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const GET_PROFILE = "GET_PROFILE";

export const updateProfile = actionCreator(UPDATE_PROFILE, "profile");
export const getProfile = actionCreator(GET_PROFILE);
