import styled from "styled-components"

export const Button = styled.button`
  background-color: #333;
  color: white;
  border: none;
  border-radius: 40px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #555;
    transform: scale(1.05);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: scale(1);
  }
`