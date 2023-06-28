import {
  StyledContainer,
  StyledLabel,
  StyledTitleMid,
  StyledTitleHigh,
  StyledText,
  StyledBold,
  StyledImage,
} from './styles';

const Introduction = () => {
  return (
    <StyledContainer>
      <StyledLabel>WEBINARS EXCLUSIVOS</StyledLabel>
      <StyledTitleMid> Menos Conversinha, </StyledTitleMid>
      <StyledTitleHigh>
        Mais Conversão
        <StyledImage
          src='/assets/asset-header.png'
          width={49}
          height={32}
          alt='icon'
        />
      </StyledTitleHigh>
      <StyledText>
        Conheça as estratégias que <StyledBold>mudaram o jogo</StyledBold> e
        como aplicá-las no seu negócio
      </StyledText>
    </StyledContainer>
  );
};

export default Introduction;
