import React from 'react';
import './App.css';
import './components/assets/css/fonts.css'
import Header from './components/HeaderAndFooter/Header.js';
import ReserveTable from './components/Reservation/ReserveTable';
/*import Checkout from './components/Checkout/Checkout';
import Footer from './components/HeaderAndFooter/Footer';
import BasicModal from './components/ModalCart';*/
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import PizzaStorage from "./components/FoodMenu/PizzaStorage.js";
import SaladStorage from "./components/FoodMenu/SaladStorage.js";
import BeverageStorage from "./components/FoodMenu/BeverageStorage.js";
import ModalCart from "./components/ModalCart.js";
/*import SideBar from './components/SideBar';
import {Routes, Route } from 'react-router-dom';
import {useState} from "react";
import { paths } from './components/SideBarData';*/

const font = "'Zen Maru Gothic', sans-serif";

const theme = createTheme({
  typography: {
    fontFamily: font,
  },
  button: {
    textTransform: "none",
  }
});


function App() {
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
  return (
    <div className={App}>
      <ThemeProvider theme={theme}>
      <Header func={ handleOpen }/>
      <ReserveTable open={ open } onClose={ handleClose } onBackDropClick={ handleClose }/>
      <PizzaStorage/>
      <SaladStorage/>
      <BeverageStorage/>
        {/*<Checkout />


      <SideBar />
      <Routes>
        <Route path='/' />
        <Route path={paths.PIZZA} element={<Pizza items={pizzas} />} />

      </Routes>

      <Checkout />
      <ModalCart/>
      <Footer />*/}
        <ModalCart />
      </ThemeProvider>
    </div>
  );
}

export default App;
