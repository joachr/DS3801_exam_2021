import './App.css';
import Header from './components/Header.js';
import Checkout from './components/Checkout';
import {useState} from "react";
import Pizza from "./components/Pizza.js";
import pizzaImage from './components/images/margarita.jpeg'


const INITIAL_PIZZAS = [
  {
    title: "Margarita",
    image: pizzaImage,
    price: "199",
  },
  {
    title: "Margarita",
    image: pizzaImage,
    price: "199",
  },
  {
    title: "Margarita",
    image: pizzaImage,
    price: "199",
  },
  {
    title: "Margarita",
    image: pizzaImage,
    price: "199",
  },
];

function App() {
  const [pizzas, setPizzas] = useState(INITIAL_PIZZAS);

  return (
    <div>
      <Header/>
      <Pizza items={pizzas}/>
      {/*<Checkout/>*/}
    </div>
  );
}

export default App;
