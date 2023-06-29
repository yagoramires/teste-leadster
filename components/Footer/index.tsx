import {
  StyledFooter,
  StyledLogoContainer,
  StyledLogo,
  StyledLogoText,
  StyledListContainer,
  StyledList,
  StyledListTitle,
  StyledListItem,
  StyledListLink,
  StyledCopyContainer,
  StyledCopyText,
  StyledCopyLink,
  StyledDivider,
  StyledIconsContainer,
  FacebookIcon,
  InstaIcon,
  LinkedinIcon,
  StyledIconLink,
} from './styles';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLogoContainer>
        <StyledLogo src='/assets/logo.png' width={194} height={42} alt='logo' />
        <StyledLogoText>Transformando visitantes em clientes.</StyledLogoText>
      </StyledLogoContainer>

      <StyledListContainer>
        <StyledList>
          <StyledListTitle>Links Principais</StyledListTitle>
          <StyledListItem>
            <StyledListLink href='/'>Home</StyledListLink>
          </StyledListItem>
          <StyledListItem>
            <StyledListLink href='/'>Ferramenta</StyledListLink>
          </StyledListItem>
          <StyledListItem>
            <StyledListLink href='/'>Preços</StyledListLink>
          </StyledListItem>
          <StyledListItem>
            <StyledListLink href='/'>Contato</StyledListLink>
          </StyledListItem>
        </StyledList>
        <StyledList>
          <StyledListTitle>Cases</StyledListTitle>
          <StyledListItem>
            <StyledListLink href='/'>Geração de Leads B2B</StyledListLink>
          </StyledListItem>
          <StyledListItem>
            <StyledListLink href='/'>
              Geração de Leads em Software
            </StyledListLink>
          </StyledListItem>
          <StyledListItem>
            <StyledListLink href='/'>
              Geração de Leads em Imobiliária
            </StyledListLink>
          </StyledListItem>
          <StyledListItem>
            <StyledListLink href='/'>Cases de Sucesso</StyledListLink>
          </StyledListItem>
        </StyledList>
        <StyledList>
          <StyledListTitle>Materiais</StyledListTitle>
          <StyledListItem>
            <StyledListLink href='/'>Blog</StyledListLink>
          </StyledListItem>
          <StyledListItem>
            <StyledListLink href='/'>Parceria com Agências</StyledListLink>
          </StyledListItem>
          <StyledListItem>
            <StyledListLink href='/'>
              Guia Definitivo do Marketing
            </StyledListLink>
          </StyledListItem>
          <StyledListItem>
            <StyledListLink href='/'>Materiais Gratuitos</StyledListLink>
          </StyledListItem>
        </StyledList>
        <StyledList>
          <StyledListTitle>Siga a Leadster</StyledListTitle>
          <StyledListItem>
            <StyledIconsContainer>
              <StyledIconLink
                href='https://www.linkedin.com/company/leadster-platform/'
                target='blank'
              >
                <LinkedinIcon />
              </StyledIconLink>
              <StyledIconLink
                href='https://www.facebook.com/leadsterplatform '
                target='blank'
              >
                <FacebookIcon />
              </StyledIconLink>
              <StyledIconLink
                href='https://www.instagram.com/leadster.com.br/'
                target='blank'
              >
                <InstaIcon />
              </StyledIconLink>
            </StyledIconsContainer>
          </StyledListItem>

          <StyledListItem>
            E-mail:{' '}
            <StyledListLink
              href='mailto:contato@leadster.com.br'
              target='blank'
            >
              contato@leadster.com.br
            </StyledListLink>
          </StyledListItem>
          <StyledListItem>
            Telefone:{' '}
            <StyledListLink href='tel:+5552988289851' target='blank'>
              (42) 98828-9851
            </StyledListLink>
          </StyledListItem>
        </StyledList>
      </StyledListContainer>

      <StyledDivider />

      <StyledCopyContainer>
        <StyledCopyText>
          Copyright &copy; 2015 - 2022 Todos os direitos reservados |{' '}
          <StyledCopyLink href='https://leadster.com.br/' target='blank'>
            Leadster
          </StyledCopyLink>
        </StyledCopyText>
        <StyledCopyText>
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
          Termos de uso
        </StyledCopyText>
      </StyledCopyContainer>
    </StyledFooter>
  );
};

export default Footer;
