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

//this is the main App function where all component filed together
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//this is the header component
function Header() {
  return (
    <header className="header">
      <h1 style={{ color: "red" }}>Fast React Pizza Co.</h1>
    </header>
  );
}

//this is the menu component where dev store MENU TAGLINE, MENU ARRAY DESTRUCTURING where we instruct the computer to
//print each pizza detail as long there is something inside the pizza array using pizzas.map(pizza)
function Menu() {
  //const pizzas = [];

  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <menu className="menu">
      <h2>Our Menu</h2>
      {/*Short circuit, if the first condition false then the code stop there and add TERNARIES Operator*/}

      {numPizzas > 0 ? (
        // <> </> this is a react fragment
        <>
          <p>
            Number 1 authentic Italian cuisine. 6 pizzas to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          {/*this pizzaObj include all pizza detail from pizzaData, then we pass the pizzaObj to pizza component*/}
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
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

//this is the pizza component used in MENU component, where this component get the breakdown data from MENU and
//this component layout all the details, then the MENU display <Pizza /> with all the details breakdown
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/*{pizzaObj.soldOut ? <span>Sold Out</span> : <span>pizzaObj.price</span>}*/}
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

//this is footer component where dev store GETHOUR Variable, TAGLINE
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {/*{new Date().toLocaleTimeString()} We're Open Now*/}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>We are happy to meet you in the working hours</p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour} until {closeHour}, please visit us or order
        online
      </p>
      <button className="btn">Order</button>
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
