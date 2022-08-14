import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 350px;
  height: 540px;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.backgroundPrimaryLightest};
  border-radius: 10px;
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 63%;
  background: ${(props) => props.theme.backgroundPrimaryLight};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

interface CardTextProps {
  hasImage: boolean;
}

const CardText = styled.div<CardTextProps>`
  width: 100%;
  display: flex;
  background: ${(props) => props.theme.backgroundPrimaryLightest};
  padding: 20px;
  border-radius: 10px 10px 0px 0px;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 150%;
  letter-spacing: 0.02em;
  ${(props) => {
    if (props.hasImage) {
      return `
        height: 33%;
        align-items: flex-start;
        justify-content: flex-start;
      `;
    }
    return `
        height: 100%;
        align-items: center;
        justify-content: center;
      `;
  }}
`;

type CardProps = {
  text: string;
  image?: string;
};

const Card: React.FC<CardProps> = ({ text, image }: CardProps) => (
  <CardContainer>
    {image && (
      <CardImageContainer>
        <CardImage src={image} />
      </CardImageContainer>
    )}
    <CardText hasImage={!!image}>{text}</CardText>
  </CardContainer>
);

Card.defaultProps = {
  image: '',
};

export default Card;
