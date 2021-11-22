import React from 'react';
import './App.css';
import './components/assets/css/fonts.css'
import Header from './components/HeaderAndFooter/Header.js';
import ReserveTable from './components/Reservation/ReserveTable';
import { CartProvider, useCart } from "react-use-cart";
/*import Checkout from './components/Checkout/Checkout';
import Footer from './components/HeaderAndFooter/Footer';
import BasicModal from './components/ModalCart';*/
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import PizzaStorage from "./components/FoodMenu/PizzaStorage.js";
import SaladStorage from "./components/FoodMenu/SaladStorage.js";
import BeverageStorage from "./components/FoodMenu/BeverageStorage.js";
import ModalCart from "./components/ModalCart.js";
import Cart from "./components/Cart/Cart.js";
import SideBar from './components/SideBar';
import {Routes, Route } from 'react-router-dom';
import {useState} from "react";
import { paths } from './components/SideBarData';
import Checkout from "./components/checkoutComponents/Checkout";


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

    const [openCart, setOpenCart] = React.useState(false);
    const handleOpenCart = () => setOpenCart(true);
    const handleCloseCart = () => setOpenCart(false);
    
  return (
    <div className={App}>
      <ThemeProvider theme={theme}>
      <CartProvider>
      <Header func1={ handleOpen } func2={ handleOpenCart }   />
      <ReserveTable open={ open } onClose={ handleClose } onBackDropClick={ handleClose }/>
      
        {/*<Checkout />*/}

    <Routes>
        <Route path="/checkOut" element={<Checkout/>}/>
    </Routes>

      <SideBar />
      <Routes>
        
        <Route path={paths.PIZZA} element={<PizzaStorage />} />
        <Route path={paths.SALAD} element={<SaladStorage />} />

      </Routes>
      {    /*
      <Checkout />
      <ModalCart/>
      <Footer />*/}
        <ModalCart open={openCart}
                onClose={handleCloseCart}/>
      </CartProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
