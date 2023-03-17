import React from "react";
import { TaskLabel,ContainerFiltro, TaskInput } from "./styles";

function Filters() {
    return (
        <ContainerFiltro>
            <h3>Filtros</h3>
            <TaskLabel>
                Valor mínimo:
                <TaskInput type="number" placeholder="Valor Minímo" />
            </TaskLabel>
            <TaskLabel>
                Valor máximo:
                <TaskInput type="number" placeholder="Valor máximo" />
            </TaskLabel>
            <TaskLabel>
                Busca por Nome:
                <TaskInput type="text" placeholder="Busca por Nome"/>
            </TaskLabel>
        </ContainerFiltro>
    )
}

export default Filters