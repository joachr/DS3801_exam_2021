import './App.css';
import Header from './components/Header.js';
import Checkout from './components/checkoutComponents/Checkout';
import {useState} from "react";
import Pizza from "./components/Pizza.js";
<<<<<<< HEAD
import pizzaImage from './components/images/margarita.jpeg';
import BasicModal from './components/ModalCart';
=======
import pizzaImage from './components/images/margarita.jpeg'
import Footer from './components/Footer';
>>>>>>> ea98e6100003d37a78be52a353147c31b2530f9f


const INITIAL_PIZZAS = [
  {
    title: "Margarita",
    image: pizzaImage,
    ingredients: "ost, tomatsaus, basilikum",
    price: "199",
  },
  {
    title: "Margarita",
    image: pizzaImage,
    ingredients: "ost, tomatsaus, basilikum",
    price: "199",
  },
  {
    title: "Margarita",
    image: pizzaImage,
    ingredients: "ost, tomatsaus, basilikum",
    price: "199",
  },
  {
    title: "Margarita",
    image: pizzaImage,
    ingredients: "ost, tomatsaus, basilikum",
    price: "199",
  },
  {
    title: "Margarita",
    image: pizzaImage,
    ingredients: "ost, tomatsaus, basilikum",
    price: "199",
  },
  {
    title: "Margarita",
    image: pizzaImage,
    ingredients: "ost, tomatsaus, basilikum",
    price: "199",
  },
];

function App() {
  const [pizzas, setPizzas] = useState(INITIAL_PIZZAS);

  return (
    <div>
<<<<<<< HEAD
      <Header/>
      <Pizza items={pizzas}/>
      <BasicModal></BasicModal>
      {/*<Checkout/>*/}
=======
      <Header />
      <Checkout />
      <Footer />
>>>>>>> ea98e6100003d37a78be52a353147c31b2530f9f
    </div>
  );
}

export default App;
