'use client';
import { useState } from 'react';
import {
  ArrowIcon,
  StyledSelectedOrder,
  StyledOrderContainer,
  StyledOrderLabel,
  StyledOrderOption,
  StyledOrderOptionsContainer,
  StyledSelectedOption,
} from './styles';

const Select = () => {
  const [selected, setSelected] = useState('Selecione');
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(!open);
  };

  return (
    <StyledOrderContainer>
      <StyledOrderLabel>Ordenar por</StyledOrderLabel>
      <StyledSelectedOrder onClick={handleOpenModal}>
        <StyledSelectedOption>{selected}</StyledSelectedOption>
        <ArrowIcon />

        <StyledOrderOptionsContainer open={open}>
          <StyledOrderOption onClick={() => setSelected('Selecione')}>
            Selecione
          </StyledOrderOption>
          <StyledOrderOption onClick={() => setSelected('Mais recentes')}>
            Mais recentes
          </StyledOrderOption>
          <StyledOrderOption onClick={() => setSelected('Mais antigos')}>
            Mais antigos
          </StyledOrderOption>
        </StyledOrderOptionsContainer>
      </StyledSelectedOrder>
    </StyledOrderContainer>
  );
};

export default Select;
