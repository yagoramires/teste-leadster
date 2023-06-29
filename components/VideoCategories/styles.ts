'use client';
import styled from 'styled-components';

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
`;
export const StyledCategoriesListItem = styled.li`
  color: ${({ theme }) => theme.colors.dark};
  text-transform: capitalize;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 2rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.bluelink};
    border: 1px solid ${({ theme }) => theme.colors.bluelink};
  }
`;
