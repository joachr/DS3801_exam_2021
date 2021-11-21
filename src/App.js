import './App.css';
import './components/assets/css/fonts.css'
import Header from './components/Header.js';
import Checkout from './components/checkoutComponents/Checkout';
import {useState} from "react";
import Pizza from "./components/Pizza.js";
import basilPizzaImage from './components/assets/images/basil.jpg'
import baconbedPizzaImage from './components/assets/images/baconbed.jpg'
import cadonationPizzaImage from './components/assets/images/cadonation.jpg'
import chanterelleheavenPizzaImage from './components/assets/images/chanterelleheaven.jpg'
import deeppurplePizzaImage from './components/assets/images/deeppurple.jpg'
import margaritaPizzaImage from './components/assets/images/margarita.jpeg'
import Footer from './components/Footer';
import BasicModal from './components/ModalCart';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const font = "'Zen Maru Gothic', sans-serif";

const theme = createTheme({
  typography: {
    fontFamily: font,
  },
  button: {
    textTransform: "none",
  }
});


const INITIAL_PIZZAS = [
  {
    id: "p1",
    title: "Margarita",
    image: margaritaPizzaImage,
    ingredients: "ost, tomatsaus, basilikum",
    price: "199",
  },
  {
    id: "p2",
    title: "Basil",
    image: basilPizzaImage,
    ingredients: "ost, tomatsaus, bacon, basilikum, sjampinjong, oliven",
    price: "169",
  },
  {
    id: "p3",
    title: "Bacon bed",
    image: baconbedPizzaImage,
    ingredients: "ost, tomatsaus, spicy pepper, oregano, bacon, og litt mer bacon",
    price: "199",
  },
  {
    id: "p4",
    title: "Cadonation",
    image: cadonationPizzaImage,
    ingredients: "ost, kremet saus, høne, appelsin, avocado, sennep",
    price: "209",
  },
  {
    id: "p5",
    title: "Chanterelleheaven",
    image: chanterelleheavenPizzaImage,
    ingredients: "ost, trøffelsaus, steinsopp, kantareller, sjampinjong, løk",
    price: "239",
  },
  {
    id: "p6",
    title: "Deep purple",
    image: deeppurplePizzaImage,
    ingredients: "ost, tomatsaus, lam, salsa, løk, hemmelig saus, basilikum",
    price: "199",
  },
];

function App() {
  const [pizzas, setPizzas] = useState(INITIAL_PIZZAS);

  return (
    <div className={App}>
      <ThemeProvider theme={theme}>
      <Header />
      <Pizza items={pizzas}/>
      <Checkout />
      <BasicModal/>
      <Footer />
      </ThemeProvider>
    </div>

  );
}

export default App;
