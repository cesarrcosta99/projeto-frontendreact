import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ContainerCard } from "./styles";
import { CardTitle } from "./styles";

function Home({productList}){
    return(
        <ContainerCard>
           <CardTitle>
            <p>Quantidade de produtos:{productList.length}</p>
             <p>Ordenação:
              <select>
                <option value="" key="">Crescente</option>
                <option value="" key="">Decrescente</option>
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