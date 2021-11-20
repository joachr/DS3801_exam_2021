import './App.css';
import Header from './components/Header.js';
import Checkout from './components/Checkout';
import {useState} from "react";
import Pizza from "./components/Pizza.js";
import pizzaImage from './components/images/margarita.jpeg';
import BasicModal from './components/ModalCart';


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
      <Header/>
      <Pizza items={pizzas}/>
      <BasicModal></BasicModal>
      {/*<Checkout/>*/}
    </div>
  );
}

export default App;
