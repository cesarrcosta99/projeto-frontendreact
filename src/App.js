import React, { useState } from "react";
import { createGlobalStyle } from "styled-components"
import Filters from "./Componentes/Filtro/Filtro";
import Home from "./Componentes/ProductList/Home/Home";
import Cart from "./Componentes/ShoppingCart/Cart/Cart";
import { ContainerGlobal } from "./styles";
import { ProductList } from "./Componentes/Assents/ProductList";


const GlobalStyles = createGlobalStyle`
    *{ 
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family:"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    }
  `



function App() {
  const [minFilter,setMinFilter]=useState("")
  const [maxFilter,setMaxFilter]=useState("")
  const [searchFilter,setSearchFilter  ]=useState("")
  const [cart,setCart]=useState([])
  const[amount,setAmount]=useState(0)

  return (
    <ContainerGlobal>
      <GlobalStyles/>
      <Filters minFilter={minFilter} setMinFilter={setMinFilter} maxFilter={maxFilter} setMaxFilter={setMaxFilter} searchFilter={searchFilter} setSearchFilter={setSearchFilter}/>
      <Home productList={ProductList} amount={amount} setAmount={setAmount} cart={cart} setCart={setCart}/>
      <Cart amount={amount} setAmount={setAmount} cart={cart} setCart={setCart}/>
    </ContainerGlobal>
  )
}

export default App;
