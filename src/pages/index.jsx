import React from "react";

import withLayout from "../layouts/WithLayoutProvider";
import Profile from "../modules/profile/profile";

const Index = () => <Profile />;

export default withLayout(Index);
