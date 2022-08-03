import React from 'react';
import styled from 'styled-components';

const CardsDisplayContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: ${(props) => props.theme.backgroundPrimary};
`;

type CardsDisplayProps = {
  color: string;
};

const CardsDisplay: React.FC<CardsDisplayProps> = ({
  color,
}: CardsDisplayProps) => (
  <CardsDisplayContainer>CardsDisplay: {color}</CardsDisplayContainer>
);

export default CardsDisplay;
