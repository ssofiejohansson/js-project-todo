import styled from "styled-components"

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const Button = styled.button`
  background-color: transparent;
  color: #333;
  padding: 10px;
  border: none;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: scale(1);
  }
  &.large {
    font-size: 42px;
    padding: 0;

    @media (min-width: 1028px) {
      font-size: 66px;
    }
  }
  &.right-align {
    margin-left: auto;
    }
`