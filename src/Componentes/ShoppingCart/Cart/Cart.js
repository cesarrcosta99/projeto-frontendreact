import React from "react";
import Items from "../Items/Items";
import { ContainerCarrinho } from "./styles";

 function Cart({amount,setAmount,cart,setCart,currencyBrazil}){

    return(
        <ContainerCarrinho>
          <h3>Carrinho:</h3>
          <Items cart={cart} setCart={setCart} amount={amount} setAmount={setAmount} currencyBrazil={currencyBrazil}/>
        </ContainerCarrinho>
    )
 }

 export default Cart