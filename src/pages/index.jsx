import React from "react";

import withLayout from "../layouts/WithLayoutProvider";
import ProfileContainer from "../modules/profile/profile-container";

const Index = () => <ProfileContainer />

export default withLayout(Index);
