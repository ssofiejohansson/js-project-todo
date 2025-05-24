import styled from "styled-components"

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const Button = styled.button`
  background-color: transparent;
  color: white;
  padding: 10px;
  border: none;
  font-size: 32px;
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
    font-size: 36px;

    @media (min-width: 1028px) {
      font-size: 66px;
    }
  }
  &.right-align {
    margin-left: auto;
    }
`