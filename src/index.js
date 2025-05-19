import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizza/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizza/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizza/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizza/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizza/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizza/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 style={{ color: "red" }}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  //const pizzas = [];

  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <menu className="menu">
      <h2>Our Menu</h2>
      {/*Short circuit, if the first condition false then the code stop there and add TERNARIES Operator*/}

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu</p>
      )}
      {/*<Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        price={10}
        image="Pizza/margherita.jpg"
      />
      <Pizza
        name="Pizza Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price={6}
        image="Pizza/focaccia.jpg"
      />*/}
    </menu>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {/*{new Date().toLocaleTimeString()} We're Open Now*/}
      <div className="order">
        {isOpen && (
          <p>We're open until {closeHour}, please visit us or order online</p>
        )}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </div>
  );
}

//latest render react since version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
