import styled from "styled-components";

export const Heading = styled.h1`
  font-size: clamp(66px, 8vw, 86px);
  width:80%;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -5px;
  margin: 0;
  line-height: 1;
  
  @media (min-width: 1500px) {
  font-size: clamp(66px, 8vw, 116px);
  }
`

export const SubHeading = styled.h2`
  font-size: clamp(32px, 4vw, 44px);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -2px;
  padding: 8px;
    line-height: 1.2;
`

export const SmallHeading = styled.h3`
  font-size: clamp(16px, 2vw, 32px);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -1px;
  padding: 6px;
`
export const Text = styled.p`
  font-size: clamp(12px, 1.5vw, 24px);
  font-weight: 400;
  text-transform: none;
  letter-spacing: -0.5px;
  padding: 4px;
`