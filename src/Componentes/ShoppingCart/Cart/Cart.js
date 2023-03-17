import React from "react";
import Items from "../Items/Items";
import { ContainerCarrinho } from "./styles";

 function Cart(){
    return(
        <ContainerCarrinho>
          <h3>Carrinho:</h3>
          <Items/>
        </ContainerCarrinho>
    )
 }

 export default Cart