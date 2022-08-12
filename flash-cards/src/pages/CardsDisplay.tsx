import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardsContents } from '../constants/types';
import Card from './Card';

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

interface DrawnCardsProps {
  drawnCardsSize: number;
}

const DrawnCards = styled.div<DrawnCardsProps>`
  width: 350px;
  flex-shrink: 0;
  background: ${(props) => props.theme.borderLight};
  border-radius: 10px;
  height: calc(565px - ${(props) => props.drawnCardsSize}px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition-duration: 150ms;
`;

const DrawnCardsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 565px;
  width: 350px;
  flex-shrink: 0;
`;

const ActionsArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 390px;
  padding: 20px;
  margin-top: 16px;

  @media (max-height: 844px) {
    flex-direction: column;
    height: 540px;
    width: auto;
    margin-top: 0px;
    margin-left: 16px;
    padding: 0px 20px;
  }
`;

interface RemainingCardsProps {
  remainingCardsSize: number;
}

const RemainingCards = styled.div<RemainingCardsProps>`
  background: ${(props) => props.theme.borderDark};
  width: 150px;
  height: calc(230px + ${(props) => props.remainingCardsSize}px);
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  transition-duration: 150ms;
`;

const DrawButton = styled.button`
  transition-duration: 150ms;
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
    transform: translate(0px, -5px) rotate(-3deg);
    opacity: 0.9;
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
  cards: CardsContents[];
};

const CardsDisplay: React.FC<CardsDisplayProps> = ({
  cards,
}: CardsDisplayProps) => {
  const [remainingCards, setRemainingCards] = useState<CardsContents[]>(cards);
  const [drawnCard, setDrawnCard] = useState<CardsContents>(remainingCards[0]);

  useEffect(() => {
    shuffleCards();
  }, [cards]);

  const drawCard = () => {
    if (remainingCards.length > 1) {
      setRemainingCards([...remainingCards.slice(1)]);
      setDrawnCard(remainingCards[0]);
    } else {
      shuffleCards();
    }
  };
  const shuffleCards = () => {
    const shuffledCards = shuffleArray([...cards]);
    setRemainingCards(shuffledCards);
    setDrawnCard(remainingCards[0]);
  };

  const shuffleArray = (array: any[]): any[] => {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      // eslint-disable-next-line no-param-reassign
      array[i] = array[j];
      // eslint-disable-next-line no-param-reassign
      array[j] = temp;
    }
    return array;
  };

  const getRemainingCardsSize = (maxPixels: number) => {
    const percentage = Math.floor((remainingCards.length / cards.length) * 100);
    return (maxPixels * percentage) / 100;
  };

  return (
    <CardsDisplayContainer>
      <DrawnCardsContainer>
        <DrawnCards drawnCardsSize={getRemainingCardsSize(25)}>
          <Card text={drawnCard.text} image={drawnCard.image} />
        </DrawnCards>
      </DrawnCardsContainer>
      <ActionsArea>
        <ShuffleButton onClick={shuffleCards}>SHUFFLE</ShuffleButton>
        <RemainingCards remainingCardsSize={getRemainingCardsSize(15)}>
          <DrawButton onClick={drawCard}>DRAW</DrawButton>
        </RemainingCards>
      </ActionsArea>
    </CardsDisplayContainer>
  );
};

export default CardsDisplay;
