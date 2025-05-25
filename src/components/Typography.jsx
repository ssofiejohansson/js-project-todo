import styled, { keyframes } from "styled-components";

export const Heading = styled.h1`
  font-size: clamp(56px, 8vw, 86px);
  width:80%;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -5px;
  margin: 0;
  line-height: 1;
  
  .highlight{
  font-style: italic;
  letter-spacing: 2px;
  }

  @media (min-width: 1500px) {
  font-size: clamp(66px, 8vw, 116px);
  }
`

export const SubHeading = styled.h2`
  font-size: clamp(32px, 4vw, 38px);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -2px;
  padding: 8px;
  line-height: 1.2;
`

export const SmallHeading = styled.h3`
  font-size: clamp(24px, 2vw, 32px);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -2px;
  line-height: 1.2;
`

const arrowAnimation = keyframes`
  0% {
    transform: scale(0.8) rotate(10deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.1) rotate(-10deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(-10deg);
    opacity: 1;
  }
`;

export const Text = styled.p`
  font-size: clamp(16px, 1.5vw, 24px);
  font-weight: 400;
  text-transform: none;
  letter-spacing: -0.5px;
  padding: 4px;
  
  &.right-align {
    text-align: right;
    width: 100%;
  }

  &.animation {
    font-size: 60px;
    padding: 0;
    margin: 0;
    margin-top: 22px; 
    opacity: 0;
    transition: opacity 0.3s;
    transform: rotate(-20deg); 
    z-index: 10;
  }
  &.animation.visible {
    opacity: 1;
     animation: ${arrowAnimation} 0.7s forwards;
 
  }
`