import { useContext } from 'react';
import { VideosContext } from '@/context/VideosContext';
import { StyleHeader, StyledLogo, StyledLink } from './styles';

const Header = () => {
  const { headerReference } = useContext(VideosContext);

  return (
    <StyleHeader ref={headerReference}>
      <StyledLink href={'#'}>
        <StyledLogo src='/assets/logo.png' width={194} height={42} alt='logo' />
      </StyledLink>
    </StyleHeader>
  );
};

export default Header;
