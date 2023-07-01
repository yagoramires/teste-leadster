'use client';
import styled, { keyframes } from 'styled-components';
import { BiSolidDownArrow } from 'react-icons/bi';

export const StyledOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    gap: 1rem;
    flex-direction: row;
  }
`;

export const StyledOrderLabel = styled.label`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 700;
`;

export const StyledSelectedOrder = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.dark};
  outline: none;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 700;
  padding: 0.5rem 1rem;

  border-radius: 0.5rem;

  position: relative;
  cursor: pointer;
`;

const opacityAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledOrderOptionsContainer = styled.dialog`
  position: absolute;
  z-index: 10;
  left: 0;
  top: 2.5rem;

  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};

  animation: ${opacityAnimation} 0.5s ease;

  display: ${({ open }) => (open === true ? 'flex' : '')};
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem 0.5rem;
`;

export const StyledSelectedOption = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.dark};
  padding: 0 0.5rem;
`;

export const StyledOrderOption = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.dark};
  padding: 0 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ArrowIcon = styled(BiSolidDownArrow)`
  font-size: 0.8rem;
`;
