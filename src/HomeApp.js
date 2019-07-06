import React from "react";
import MenuApp from "./components/menuApp/MenuApp";
import Cabecalho from "./components/cabecalho/Cabecalho";
import BreedSearcher from "./components/breedSearcher/BreedSearcher";
import "./index.css";

function HomeApp() {
  return (
    <div className="home-app">
        <div className="menu-app">
            <MenuApp />
        </div>
        <div className="body-home-app">
            <Cabecalho />
            <BreedSearcher />
        </div>
    </div>
  );
}

export default HomeApp;
