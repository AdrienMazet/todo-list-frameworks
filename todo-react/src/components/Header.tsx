import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">TodoReact</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
