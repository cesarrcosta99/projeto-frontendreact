import React from "react";
import { CardContainer, CardImage, ProductName, ProductPrice, AddToCartButton, CardsContainer } from "./Style";


function ProductCard({ id, name, value, image,cart,setCart, amount,setAmount,indice,prod }) {
  
  const addCart = (id) => {

    const existeItem = cart.find((item) => {
        return item.id === id
    })
    if (existeItem) {
        const newCart = cart.map((item) => {
            if (item.id === existeItem.id) {
                return { ...item, amount: item.amount + 1 }
            }
            return item
        })
        setCart(newCart)
    } else {
        setCart([...cart, prod])
    }
}


  return (
    <>
      <CardContainer key={id}>
        <CardImage src={image} />
        <ProductName>{name}</ProductName>
        <ProductPrice>{`R$${value}`}</ProductPrice>
        <AddToCartButton onClick={()=>addCart(id)}>Adicionar ao Carrinho</AddToCartButton>
      </CardContainer>
    </>
  )
}

export default ProductCard