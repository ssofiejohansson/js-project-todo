import styled from "styled-components";

export const List = styled.ul`
    padding: 0;
  
  `
export const ListItems = styled.li`

    margin: 10px 0px;
    list-style: none;
    border-bottom: 4px solid #333;
  `

export const Label = styled.label`
  font-size: 18px;
  padding: 10px;
  
`

export const Input = styled.input` 
  margin: 10px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-color: #333; 
  border: none;
  outline: 4px solid #333;

  &:checked {

  }
  &:checked + ${Label} {
    text-decoration: line-through;
  }
  &:checked + ${Label}:hover {
    text-decoration: none;
  }
  &:hover {
    background-color: #555;
    transform: scale(1.05);
  }
  `