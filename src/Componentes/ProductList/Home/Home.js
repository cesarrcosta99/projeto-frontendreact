import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ContainerCard } from "./styles";
import { CardTitle } from "./styles";

function Home(){
    return(
        <ContainerCard>
           <CardTitle>
            <p>Quantidade de produtos</p>
             <p>Ordenação:
              <select>
                <option value="" key="">Crescente</option>
                <option value="" key="">Decrescente</option>
              </select>
              </p>
              </CardTitle>
              <div>
             <ProductCard/>
             </div>
        </ContainerCard>
    )
}

export default Home