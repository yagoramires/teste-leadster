'use client';
import styled from 'styled-components';

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
export const StyledPaginationListItem = styled.li`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.dark};
`;
