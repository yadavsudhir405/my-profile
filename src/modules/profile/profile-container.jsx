import { getProfile } from "./action";
import { connect } from "react-redux";
import Profile from "./profile";

export const mapStateToProps = state => {
  const { profile } = state;
  return {
    profile
  };
};

export const mapDispatchToProps = dispatch => ({
  getProfile: () => dispatch(getProfile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
