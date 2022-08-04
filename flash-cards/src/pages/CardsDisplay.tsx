import React from 'react';
import styled from 'styled-components';

const CardsDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
  height: 100vh;
  width: 100%;

  @media (max-height: 844px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Card = styled.div`
  width: 350px;
  height: 540px;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.backgroundPrimaryLightest};
  border-radius: 10px;
`;

const CardImage = styled.div`
  width: 100%;
  height: 63%;
  background: ${(props) => props.theme.backgroundPrimaryLight};
  border-radius: 10px 10px 0px 0px;
`;

const CardText = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  background: ${(props) => props.theme.backgroundPrimaryLightest};
  padding: 20px;
  border-radius: 10px 10px 0px 0px;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 150%;
  letter-spacing: 0.02em;
`;

const ActionsArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 390px;
  padding: 20px;
  margin-top: 16px;

  @media (max-height: 844px) {
    flex-direction: column;
    height: 540px;
    margin-top: 0px;
    margin-left: 16px;
    padding: 0px 20px;
  }
`;

const DrawButton = styled.button`
  background: ${(props) => props.theme.backgroundPrimaryMain};
  width: 150px;
  height: 230px;
  border-radius: 10px;
  border: none;
  color: white;
  font-weight: 800;
  font-size: 1.25rem;
  cursor: pointer;
  :active {
    background: ${(props) => props.theme.backgroundPrimaryDark};
    transform: scale(0.95);
  }
`;

const ShuffleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-weight: 800;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.backgroundSecondaryMain};
  :active {
    color: ${(props) => props.theme.backgroundSecondaryDark};
    transform: scale(0.95);
  }
`;

type CardsDisplayProps = {
  color: string;
};

const CardsDisplay: React.FC<CardsDisplayProps> = ({
  color,
}: CardsDisplayProps) => (
  <CardsDisplayContainer>
    <Card>
      <CardImage />
      <CardText>
        Lorem {color} ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </CardText>
    </Card>
    <ActionsArea>
      <ShuffleButton>SHUFFLE</ShuffleButton>
      <DrawButton>DRAW</DrawButton>
    </ActionsArea>
  </CardsDisplayContainer>
);

export default CardsDisplay;
