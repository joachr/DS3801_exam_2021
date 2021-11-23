import React, {useState} from "react";
import margaritaPizzaImage from "../assets/images/pizzas/margarita.jpeg";
import basilPizzaImage from "../assets/images/pizzas/basil.jpg";
import baconbedPizzaImage from "../assets/images/pizzas/baconbed.jpg";
import cadonationPizzaImage from "../assets/images/pizzas/cadonation.jpg";
import chanterelleheavenPizzaImage from "../assets/images/pizzas/chanterelleheaven.jpg";
import deeppurplePizzaImage from "../assets/images/pizzas/deeppurple.jpg";
import MenuItemPrint from "./MenuItemPrint.js";
import CampaignItemPrint from "../CampaignItem/CampaignItemPrint.js";


const INITIAL_PIZZAS = [
    {
        id: "p1",
        title: "Margarita",
        image: margaritaPizzaImage,
        ingredients: "Ost, tomatsaus, basilikum",
        price: "199",
    },
    {
        id: "p2",
        title: "Basil",
        image: basilPizzaImage,
        ingredients: "Ost, tomatsaus, bacon, basilikum, sjampinjong, oliven",
        price: "169",
    },
    {
        id: "p3",
        title: "Bacon Bed",
        image: baconbedPizzaImage,
        ingredients: "Ost, tomatsaus, spicy pepper, oregano, bacon, og litt mer bacon",
        price: "199",
    },
    {
        id: "p4",
        title: "Cadonation",
        image: cadonationPizzaImage,
        ingredients: "Ost, kremet saus, høne, appelsin, avocado, sennep",
        price: "209",
    },
    {
        id: "p5",
        title: "Chanterelle Heaven",
        image: chanterelleheavenPizzaImage,
        ingredients: "Ost, trøffelsaus, steinsopp, kantareller, sjampinjong, løk",
        price: "239",
    },
    {
        id: "p6",
        title: "Deep Purple",
        image: deeppurplePizzaImage,
        ingredients: "Ost, tomatsaus, lam, salsa, løk, hemmelig saus, basilikum",
        price: "199",
    },
];

const PizzaStorage = () => {

    const [pizzas, setPizzas] = useState(INITIAL_PIZZAS);

    return (
        <MenuItemPrint items={pizzas}/>
    );
}

export default PizzaStorage;