import React from 'react';

type CardsDisplayProps = {
  color: string;
};

const CardsDisplay: React.FC<CardsDisplayProps> = ({
  color,
}: CardsDisplayProps) => <div>CardsDisplay{color}</div>;

export default CardsDisplay;
