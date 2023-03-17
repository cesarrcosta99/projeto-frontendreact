import React from "react";
import { CardContainer, CardImage, ProductName, ProductPrice, AddToCartButton, CardsContainer } from "./Style";


function ProductCard() {
  return (
    <CardsContainer>

      <CardContainer>
        <CardImage src="https://picsum.photos/200/200?a=2" />
        <ProductName>Nome do Produto </ProductName>
        <ProductPrice>valor</ProductPrice>
        <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
      </CardContainer>

      <CardContainer>
        <CardImage src="https://picsum.photos/200/200?a=2" />
        <ProductName>Nome do Produto </ProductName>
        <ProductPrice>valor</ProductPrice>
        <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
      </CardContainer>

      <CardContainer>
        <CardImage src="https://picsum.photos/200/200?a=2" />
        <ProductName>Nome do Produto </ProductName>
        <ProductPrice>valor</ProductPrice>
        <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
      </CardContainer>

      <CardContainer>
        <CardImage src="https://picsum.photos/200/200?a=2" />
        <ProductName>Nome do Produto </ProductName>
        <ProductPrice>valor</ProductPrice>
        <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
      </CardContainer>

      

      
      </CardsContainer>

      

      

  )
}

export default ProductCard