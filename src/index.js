import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const gundamData = [
  {
    name: "GNY-001 Gundam Astraea",
    details:
      "A 2nd generation Gundam introduced in the Mobile Suit Gundam 00P side story. Known pilots include Ruido Resonance and Chall Acustica.",
    price: 6,
    photoName: "./gundams/astraea.jpg",
    build: true,
  },
  {
    name: "GN-001 Gundam Exia",
    details:
      "A mobile suit introduced in season one of Mobile Suit Gundam 00 and is piloted by Setsuna F. Seiei.",
    price: 6,
    photoName: "gundams/exia.jpg",
    build: true,
  },
  {
    name: "GN-002 Gundam Dynames",
    details:
      "A mobile suit introduced in season one of Mobile Suit Gundam 00 and is piloted by Lockon Stratos.",
    price: 6,
    photoName: "gundams/dynames.jpg",
    build: true,
  },
  {
    name: "GN-003 Gundam Kyrios",
    details:
      "A mobile suit featured in season one of Mobile Suit Gundam 00 and is piloted by Allelujah Haptism.",
    price: 6,
    photoName: "gundams/kyrios.jpg",
    build: false,
  },
  {
    name: "GN-004 Gundam Nadleeh",
    details:
      "A mobile suit introduced in season one of Mobile Suit Gundam 00. It is piloted by Tieria Erde.",
    price: 6,
    photoName: "gundams/nadleeh.jpg",
    build: true,
  },
  {
    name: "GN-005 Gundam Virtue",
    details:
      "A mobile suit introduced in season one of Mobile Suit Gundam 00. It is piloted by Tieria Erde. ",
    price: 6,
    photoName: "gundams/virtue.jpg",
    build: true,
  },
  {
    name: "GN-0000+GNR-010 00 Raiser",
    details:
      "A combined form of GN-0000 00 Gundam and GNR-010 0 Raiser introduced in season 2 of Mobile Suit Gundam 00.",
    price: 6,
    photoName: "gundams/raiser.jpg",
    build: false,
  },
  {
    name: "GNT-0000 00 Qan[T] ",
    details:
      "successor to the GN-0000+GNR-010 00 Raiser introduced in the movie Mobile Suit Gundam 00 The Movie -A wakening of the Trailblazer-. It is piloted by Setsuna F. Seiei. ",
    price: 6,
    photoName: "gundams/qant.jpg",
    build: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <List />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Gundam Collection List</h1>
    </header>
  );
}

function List() {
  const gunplas = gundamData;
  const numGunplas = gunplas.length;

  return (
    <main className="list">
      <h1>My Gundams</h1>
      {numGunplas > 0 && (
        <ul className="gunplas">
          {gunplas.map((gunpla) => (
            <Gunpla gunplaObj={gunpla} key={gunpla.name} />
          ))}
        </ul>
      )}
    </main>
  );
}

function Gunpla({ gunplaObj }) {
  return (
    <li className={`gunpla ${gunplaObj.build ? "" : "sold-out"}`}>
      <img src={gunplaObj.photoName} alt={gunplaObj.name} />
      <div>
        <h3>{gunplaObj.name}</h3>
        <p>{gunplaObj.build ? gunplaObj.details : "Missing"}</p>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>I build and collect</p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
