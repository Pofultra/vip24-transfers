import React from 'react';
import ServiceCard from '../components/ServiceCard';
import styled from 'styled-components';

const ServicesWrapper = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
`;

const ServicesTitle = styled.h1`
  color: #5c4033;
  text-align: center;
  margin-bottom: 1rem;
`;

const Services = () => {
  const services = [
    { title: 'VIP Transport', description: 'Luxury transportation services.' },
    { title: 'Event Management', description: 'Organize and manage premium events.' },
    { title: 'Personal Assistance', description: 'Customized assistance for all needs.' },
  ];

  return (
    <ServicesWrapper>
      <ServicesTitle>Our Services</ServicesTitle>
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </ServicesWrapper>
  );
};

export default Services;