import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ContainerCard } from "./styles";
import { CardTitle } from "./styles";
import { CardsContainer } from "../ProductCard/Style";

function Home({productList,amount,setAmount,cart,setCart,minFilter,setMinFilter,maxFilter,setMaxFilter,searchFilter,setSearchFilter}){
  
  const[ordination,setOrdination]=useState("")

  let maiorValor = 0
    for(const item of productList){
        if(item.value > maiorValor){
            maiorValor = item.value
        }
    }

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
              <CardsContainer>


             {productList.sort((a,b)=>{
              if(ordination === "crescente") {
                return a.value - b.value
              }
              if(ordination === "decrescente") {
                return b.value - a.value
              }

              if(ordination === "") {
                return a.id - b.id
              }
             }).filter((nameProd) => {
              return searchFilter ? nameProd.name.toLowerCase().includes(searchFilter.toLowerCase()) : nameProd
          }).filter((minValue) => {
              return minValue.value >= minFilter
          }).filter((maxValue) => {
              if(!maxFilter) {
                  return maxValue.value <= maiorValor
              } else {
                  return maxValue.value <= maxFilter
              }
          }).map((item,index)=>{
             return(  <ProductCard key={index} id={item.id} name={item.name} value={item.value} image={item.imageUrl} cart={cart} setCart={setCart} amount={amount} setAmount={setAmount} prod={item} />
             )

             })}
             </CardsContainer>
        </ContainerCard>
    )
}

export default Home