import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #d4af37;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
  color: #5c4033;
`;

const Description = styled.p`
  color: #555;
`;

const ServiceCard = ({ title, description }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default ServiceCard;