import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #f8f9fa;
`;

const ContactTitle = styled.h1`
  color: #5c4033;
`;

const ContactInfo = styled.p`
  color: #6c757d;
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactInfo>Email: info@viptransfers.com</ContactInfo>
      <ContactInfo>Phone: +41 76 123 4567</ContactInfo>
    </ContactWrapper>
  );
};

export default Contact;