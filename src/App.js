import React from "react";
import Home from "./Componentes/Home/Home";
import Filtro from "./Componentes/Filtro/Filtro";
import Carrinho from "./Componentes/Carrinho/Carrinho";

function App() {
  return (
    <div>
      <Filtro/>
      <Home/>
      <Carrinho/>
    </div>
  )
}

export default App;
