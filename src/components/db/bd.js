import pizzaImg from "../images/pizza.png";
import burgerImg from "../images/burger.png";
import cocaImg from "../images/coca.png";
import saladImg from "../images/salad.png";
import waterImg from "../images/water.png";
import iceCreamImg from "../images/icecream.png";
import kebabImg from "../images/kebab.png";

export function getData() {
  return [
    { title: "Пицца", price: 17.99, Image: pizzaImg,id:1 },
    { title: "Бургер", price: 15, Image: burgerImg,id:2 },
    { title: "Кола", price: 3.5, Image: cocaImg ,id:3},
    { title: "Кебаб", price: 13.99, Image: kebabImg,id:4 },
    { title: "Салат", price: 2.5, Image: saladImg,id:5 },
    { title: "Газировка", price: 0.99, Image: waterImg,id:6 },
    { title: "Мороженое", price: 2.99, Image: iceCreamImg,id:7 },
  ];
}