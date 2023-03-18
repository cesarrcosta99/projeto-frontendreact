import React from "react";
import { CardContainer, CardImage, ProductName, ProductPrice, AddToCartButton, CardsContainer } from "./Style";


function ProductCard({productList}) {
  return (
    <CardsContainer >
        {productList.map((item)=>{
          return( 
            <CardContainer key={item.id}>
            <CardImage src={item.imageUrl} />
        <ProductName>{item.name}</ProductName>
        <ProductPrice>{`R$${item.value}`}</ProductPrice>
        <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
      </CardContainer>
          )
        })}
        </CardsContainer>
  )
}

export default ProductCard