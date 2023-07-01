'use client';
import { useState, useContext } from 'react';
import {
  ArrowIcon,
  StyledSelectedOrder,
  StyledOrderContainer,
  StyledOrderLabel,
  StyledOrderOption,
  StyledOrderOptionsContainer,
  StyledSelectedOption,
} from './styles';
import { VideosContext } from '@/context/VideosContext';

const Select = () => {
  const [selected, setSelected] = useState('Mais antigos');
  const [open, setOpen] = useState(false);

  const { sortVideosBySelectedOrder } = useContext(VideosContext);

  const handleSelectOrder = (type: string) => {
    setSelected(type);
    sortVideosBySelectedOrder(type);
    setOpen(!open);
  };

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
          <StyledOrderOption onClick={() => handleSelectOrder('Mais recentes')}>
            Mais recentes
          </StyledOrderOption>
          <StyledOrderOption onClick={() => handleSelectOrder('Mais antigos')}>
            Mais antigos
          </StyledOrderOption>
        </StyledOrderOptionsContainer>
      </StyledSelectedOrder>
    </StyledOrderContainer>
  );
};

export default Select;
