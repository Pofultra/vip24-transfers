import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #5c4033;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2025 VIP Transfers. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;