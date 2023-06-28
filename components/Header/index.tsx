import React from 'react';
import { StyleHeader, StyledLogo, StyledLink } from './styles';

const Header = () => {
  return (
    <StyleHeader>
      <StyledLink href={'#'}>
        <StyledLogo src='/assets/logo.png' width={194} height={42} alt='logo' />
      </StyledLink>
    </StyleHeader>
  );
};

export default Header;
