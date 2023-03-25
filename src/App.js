import React, { useState ,useEffect} from "react";
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
  const [total, setTotal] = useState(0)

function currencyBrazil(value, symbol) {
  if (!value) return null
  if (symbol) {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }
  return value.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

useEffect(() => {
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  setCart(cartData);
}, []);

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
  let newTotal = 0;
  cart.forEach((item) => {
    newTotal += item.value * item.amount;
  });
  setTotal(newTotal);
}, [cart]);



  return (
    <ContainerGlobal>
      <GlobalStyles/>
      <Filters minFilter={minFilter} setMinFilter={setMinFilter} maxFilter={maxFilter} setMaxFilter={setMaxFilter} searchFilter={searchFilter} setSearchFilter={setSearchFilter}/>
      <Home productList={ProductList} amount={amount} setAmount={setAmount} cart={cart} setCart={setCart} minFilter={minFilter} setMinFilter={setMinFilter} maxFilter={maxFilter} setMaxFilter={setMaxFilter} searchFilter={searchFilter} setSearchFilter={setSearchFilter}/>
      <Cart amount={amount} setAmount={setAmount} cart={cart} setCart={setCart} currencyBrazil={currencyBrazil}/>
    </ContainerGlobal>
  )
}

export default App;
