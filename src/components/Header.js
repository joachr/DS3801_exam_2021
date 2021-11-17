import { AppBar, Button, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import React from "react";

const useStyles = makeStyles(() => ({
    header: {
       backgroundColor: "#FFD148",
    },
 }));

 const displayDesktop = () => {
    return <Toolbar>
        <Button style={{
            backgroundColor: '#009688',
            color: 'white',
            margin: '1em'
        }} 
        variant="contained" href="#">Reserver bord</Button>
      <Button style={{
            backgroundColor: '#009688',
            color: 'white',
            margin: '1em'
        }} 
        variant="contained" href="#">Meny</Button>
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
