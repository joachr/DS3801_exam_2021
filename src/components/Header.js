import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import HeaderButton from "./HeaderButton";
import React from "react";

const useStyles = makeStyles(() => ({
    header: {
       backgroundColor: "#FFD148",
    },
 }));

 const displayDesktop = () => {
    return <Toolbar>
        <HeaderButton text="Reserver bord"></HeaderButton>
        <HeaderButton text="Meny"></HeaderButton>
    </Toolbar>;
  };

function Header() {
    const { header } = useStyles();
  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}

export default Header
