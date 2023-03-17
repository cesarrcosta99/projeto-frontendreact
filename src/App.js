import React from "react";
import { createGlobalStyle } from "styled-components"
import Filters from "./Componentes/Filtro/Filtro";
import Home from "./Componentes/ProductList/Home/Home";
import Cart from "./Componentes/ShoppingCart/Cart/Cart";
import { ContainerGlobal } from "./styles";

const GlobalStyles = createGlobalStyle`
    *{ 
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family:"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    }
  `



function App() {
  return (
    <ContainerGlobal>
      <GlobalStyles/>
      <Filters/>
      <Home/>
      <Cart/>
    </ContainerGlobal>
  )
}

export default App;
