import React from "react";
import { ContainerItens,List,Botao } from "./styles";

function Items({cart,setCart,currencyBrazil}) {

    const decreaseQuantity = (index) => {
        const newCartItems = [...cart];
        if (newCartItems[index].amount === 1) {
            return removeItem(index)
        } else {
            newCartItems[index].amount -= 1;
        }
        setCart(newCartItems);
    }
    const removeItem = (index) => {
        setCart(cart.slice(0, index).concat(cart.slice(index + 1)));
    }
    
    let totalValue = 0
    for (let prod of cart
      ){
       const multProds =  prod.value * prod.amount 
       totalValue = totalValue + multProds
    }
    
   
    return (
        
        <ContainerItens>
        {cart.map((item,index)=>{
            return(
                <div key={index}>
                    <ul>
                <List>
                    <p>{item.amount}</p>
                    <p>{item.name}</p>
                    <Botao onClick={()=>decreaseQuantity(index)}>Remover</Botao>
                </List>
            </ul>
                </div>
            )
        })}
             <div className="valortotal">
             <p>Valor total:{currencyBrazil(totalValue, true)}</p>
             </div>
            
        </ContainerItens>
    )
}

export default Items