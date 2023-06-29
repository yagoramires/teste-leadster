'use client';
import styled, { css } from 'styled-components';

interface ListItemProps {
  selected: boolean;
}

export const StyledCategoriesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const StyledCategoriesList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  flex-wrap: wrap;
`;
export const StyledCategoriesListItem = styled.li<ListItemProps>`
  ${({ theme, selected }) =>
    selected
      ? css`
          color: ${theme.colors.white};
          background: ${theme.colors.primary};
          border: 1px solid ${({ theme }) => theme.colors.primary};

          &:hover {
            color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.bluelink};
          }
        `
      : css`
          color: ${theme.colors.dark};
          background: ${theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.dark};

          &:hover {
            color: ${({ theme }) => theme.colors.bluelink};
            border: 1px solid ${({ theme }) => theme.colors.bluelink};
          }
        `};

  text-transform: capitalize;
  padding: 0.5rem 1rem;

  border-radius: 2rem;
  cursor: pointer;
`;
