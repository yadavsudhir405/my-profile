import React from "react";

import Images from "../constants/images";
import withLayout from "../layouts/WithLayoutProvider";

const Index = () => (
  <div>
    <h1>This is the index page Edited</h1>
    <img src={Images.LOGO} alt="logo" />
  </div>
);

export default withLayout(Index);
