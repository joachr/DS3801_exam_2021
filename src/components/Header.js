import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import HeaderButton from "./HeaderButton";
import EventSeatRoundedIcon from '@material-ui/icons/EventSeatRounded';
import RestaurantMenuRoundedIcon from '@material-ui/icons/RestaurantMenuRounded';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from "react";

const useStyles = makeStyles(() => ({
    header: {
       backgroundColor: "#FFD148",
    },
 }));

 const displayDesktop = () => {
    return <Toolbar>
        <HeaderButton icon={<EventSeatRoundedIcon />} text="Reserver bord"></HeaderButton>
        <HeaderButton icon={<RestaurantMenuRoundedIcon />} text="Meny"></HeaderButton>
        <ShoppingCartOutlinedIcon fontSize="large" style={{
          color: 'black',
        }}/>
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
