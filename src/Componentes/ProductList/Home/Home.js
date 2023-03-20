import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ContainerCard } from "./styles";
import { CardTitle } from "./styles";

function Home({productList,amount,setAmount,cart,setCart}){
  
  const[ordination,setOrdination]=useState("")

  const mudarOrdem=(event)=>{
    setOrdination(event.target.value)
  }

    return(
        <ContainerCard>
           <CardTitle>
            <p>Quantidade de produtos:{productList.length}</p>
             <p>Ordenação:
              <select value={ordination} onChange={mudarOrdem}>
              <option value="" key="">Ordenar por:</option>
                <option value="crescente" key="">Crescente</option>
                <option value="decrescente" key="">Decrescente</option>
              </select>
              </p>
              </CardTitle>
              <div>
             <ProductCard productList={productList}/>
             </div>
        </ContainerCard>
    )
}

export default Home