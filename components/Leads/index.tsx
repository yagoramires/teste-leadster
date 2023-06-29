import {
  StyledBackground,
  StyledContainer,
  StyledLeadsTextsContainer,
  StyledTitle,
  StyledText,
  StyledLink,
  StyledDemoImage,
  StyledButtonContainer,
  StyledDetailsContainer,
  StyledStampImage,
  StyledDetailsText,
  StyledImage,
  StyledBold,
} from './styles';

const Leads = () => {
  return (
    <StyledBackground>
      <StyledContainer>
        <StyledDemoImage
          src='/assets/comparativo_img_CTA.png'
          width={739}
          height={687}
          alt='comparativo'
        />
        <StyledLeadsTextsContainer>
          <StyledTitle>
            Pronto para triplicar sua{' '}
            <StyledBold> Geração de Leads? </StyledBold>
          </StyledTitle>
          <StyledText>
            Criação e ativação em <StyledBold>4 minutos.</StyledBold>
          </StyledText>
          <StyledButtonContainer>
            <StyledLink href='/demo'>VER DEMONSTRAÇÃO</StyledLink>
            <StyledStampImage
              src='/assets/selo_RD.png'
              width={205}
              height={73}
              alt='comparativo'
            />
          </StyledButtonContainer>
          <StyledDetailsContainer>
            <div>
              <StyledImage
                src='/assets/no-card-dark.webp'
                width={16}
                height={16}
                alt='card'
              />
              <StyledDetailsText>
                <StyledBold> Não</StyledBold> é necessário Cartão de Crédito
              </StyledDetailsText>
              <StyledDetailsText>
                <StyledBold>|</StyledBold>
              </StyledDetailsText>
            </div>
            <div>
              <StyledImage
                src='/assets/rating.webp'
                width={92}
                height={16}
                alt='rating'
              />
              <StyledDetailsText>
                <StyledBold>4.9</StyledBold>/5 média de satisfação
              </StyledDetailsText>
            </div>
          </StyledDetailsContainer>
        </StyledLeadsTextsContainer>
      </StyledContainer>
    </StyledBackground>
  );
};

export default Leads;
