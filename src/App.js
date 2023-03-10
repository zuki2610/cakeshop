import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navegacion from "./Components/Navegacion";
import "./App.css";
import Home from "./views/Home";
import Contacto from "./views/Contacto";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navegacion />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/cakeshop/contacto" element={<Contacto/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
