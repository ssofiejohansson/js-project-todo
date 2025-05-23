import styled from "styled-components"

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const Button = styled.button`
  background-color: #333;
  color: white;
  border: none;
  outline: 4px solid #333;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #555;
    transform: scale(1.05);
  }

  &:disabled {
    background-color: transparent;
    outline: 4px solid #333;
    cursor: not-allowed;
    transform: scale(1);
    color: #333;
  }
`