'use client';
import styled, { css } from 'styled-components';

interface SelectedPage {
  selected: boolean;
}

export const StyledPaginationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  border-top: 2px solid ${({ theme }) => theme.colors.gray};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 700;
`;
export const StyledPaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const StyledPaginationListItem = styled.li<SelectedPage>`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.dark};
  border-radius: 6px;
  padding: 4px 12px;
  text-align: center;

  ${({ theme, selected }) =>
    selected
      ? css`
          font-weight: 700;
          color: ${theme.colors.secondary};
          border: 1px solid ${({ theme }) => theme.colors.secondary};
        `
      : css`
          color: ${theme.colors.dark};
          border: 1px solid transparent;
        `};
`;
