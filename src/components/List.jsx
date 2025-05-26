import styled from "styled-components";

export const List = styled.ul`
    padding: 0; 
    width: 100%;
  `
export const ListItems = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    border-bottom: 4px solid #333;
    padding: 6px;
  `

export const Label = styled.p`
    font-size: 16px;
    margin: 0;
  
    letter-spacing: 1px;
    word-break: break-word;

  &.completed {
    text-decoration: line-through;
  }
@media (min-width: 1028px) {
    font-size: 22px;
  }
`