import styled from "styled-components";

export const ContainerFiltro=styled.aside`
  display:flex;
  flex-direction:column;
  height:70vh;
  width:18%;
  border:1px solid black;
  margin:1em;
  padding:1em 0.6em;

  h3{
     font-size:1.3em;
  }
`

export const TaskLabel=styled.label`
   display:flex;
   flex-direction:column;
   justify-content:center;
   padding-top:1em;
`

export const TaskInput=styled.input`
    width:25vh;
`