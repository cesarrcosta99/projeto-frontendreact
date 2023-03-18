import styled from "styled-components";

export const CardsContainer=styled.main`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:2rem;
`

export const CardContainer = styled.div`
  display:flex;
  flex-direction:column;
  border-radius:10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  align-items:center; 
  overflow:hidden;
  max-width:25vw;

`

export const CardImage = styled.img`
  width:100%;
  height:33.33vh;
  object-fit:contain;
`

export const ProductName = styled.span`
  font-size:1.2rem;
  font-weight:bold;
  color:#333;
  margin:1rem 0;
  padding-right:3em;
  `

export const ProductPrice = styled.span`
  font-size:1.3rem;
  color:#333; 
  padding-right:4em;
`

export const AddToCartButton=styled.button`
  margin:1rem 0;
  padding:1em 2em;
  background-color:#4caf50;
  color:#fff;
  border:none;
  border-radius:2rem;
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  :hover{
    background-color:#3e8e41;
  }
`



/* export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  max-width: 300px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProductName = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin: 10px 0;
`;

export const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #999;
  margin-bottom: 10px;
`;

export const AddToCartButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #3e8e41;
  }
`; */

