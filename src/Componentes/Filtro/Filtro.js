import React from "react";
import { TaskLabel,ContainerFiltro, TaskInput } from "./styles";

function Filters({minFilter,setMinFilter,maxFilter,setMaxFilter,searchFilter,setSearchFilter}) {

    const onChangeValorMinimo=(event)=>{
       setMinFilter(Math.abs(parseInt(event.target.value)))
    }

    const onChangeValorMaximo=(event)=>{
        setMaxFilter(Math.abs(parseInt(event.target.value)))
    }



    return (
        <ContainerFiltro>
            <h3>Filtros</h3>
            <TaskLabel>
                Valor mínimo:
                <TaskInput type="number" placeholder="Valor Minímo" value={minFilter} onChange={onChangeValorMinimo}/>
            </TaskLabel>
            <TaskLabel>
                Valor máximo:
                <TaskInput type="number" placeholder="Valor máximo" value={maxFilter} onChange={onChangeValorMaximo} />
            </TaskLabel>
            <TaskLabel>
                Busca por Nome:
                <TaskInput type="text" placeholder="Busca por Nome" value={searchFilter} onChange={(e)=>setSearchFilter(e.target.value)} />
            </TaskLabel>
        </ContainerFiltro>
    )
}

export default Filters