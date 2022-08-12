import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 350px;
  height: 540px;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.backgroundPrimaryLightest};
  border-radius: 10px;
`;

const CardImage = styled.img`
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

type CardProps = {
  text: string;
  image?: string;
};

const Card: React.FC<CardProps> = ({ text, image }: CardProps) => (
  <CardContainer>
    {image && <CardImage src={image} />}
    <CardText>{text}</CardText>
  </CardContainer>
);

Card.defaultProps = {
  image: '',
};

export default Card;
