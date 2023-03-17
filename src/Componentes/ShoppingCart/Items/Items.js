import React from "react";
import { ContainerItens,List,Botao } from "./styles";

function Items() {
    return (
        <ContainerItens>
            <ul>
                <List>
                    <p>1x</p>
                    <p>Produto</p>
                    <Botao>Remover</Botao>
                </List>
            </ul>
            <p>Valor total:</p>
        </ContainerItens>
    )
}

export default Items