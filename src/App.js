import './App.css';
import './components/assets/css/fonts.css'
import Header from './components/Header.js';
import Checkout from './components/checkoutComponents/Checkout';
import Footer from './components/Footer';
import BasicModal from './components/ModalCart';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import PizzaStorage from "./components/FoodMenu/PizzaStorage.js";
import SaladStorage from "./components/FoodMenu/SaladStorage.js";
import BeverageStorage from "./components/FoodMenu/BeverageStorage.js";

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

  return (
    <div className={App}>
      <ThemeProvider theme={theme}>
      <Header />
      <PizzaStorage/>
        //FIXME til rune: add 1 stk salat og 1 stk drikke til så det blir partall som på pizzaene
      <SaladStorage/>
      <BeverageStorage/>
      {/*<Checkout />
      <BasicModal/>
      <Footer />*/}
      </ThemeProvider>
    </div>

  );
}

export default App;
