import React from 'react';
import styled from 'styled-components';
import zurichAutumnImage from '../assets/zurich-autumn.png';

const HomeWrapper = styled.div`
  text-align: center;
  padding: 2rem;
  background-image: url(${zurichAutumnImage});
  background-size: cover;
  background-position: center;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #d4af37;
`;

const Subtitle = styled.p`
  color: #f8f9fa;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Title>Welcome to VIP Transfers</Title>
      <Subtitle>Your premium transport and event solution.</Subtitle>
    </HomeWrapper>
  );
};

export default Home;