'use client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  background: ${({ theme }) => theme.colors.light};

  & div {
    flex: 1;
  }

  @media (min-width: 1024px) {
    gap: 8rem;
    flex-direction: row;
  }
`;

export const StyledDemoImage = styled(Image)`
  width: 300px;
  height: auto;
  @media (min-width: 1024px) {
    width: 400px;
  }
  @media (min-width: 1440px) {
    width: 739px;
  }
`;
export const StyledBold = styled.b`
  font-weight: 800;
`;

export const StyledTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 1440px) {
    font-size: 3rem;
  }
`;

export const StyledButtonContainer = styled.div`
  max-width: 700px;
  margin-top: 1.5rem;
  border-top: 2px solid ${({ theme }) => theme.colors.gray};
  padding: 1.5rem 0;
  display: flex;

  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const StyledText = styled.p`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};

  @media (min-width: 1024px) {
    font-size: 1rem;
  }

  @media (min-width: 1440px) {
    font-size: 1.2rem;
    padding-right: 2rem;
  }
`;

export const StyledLink = styled(Link)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 1.8rem;
  text-decoration: none;
  font-weight: 600;
  border-radius: 2rem;
  transition: all 0.2s;
  font-size: 0.8rem;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
    padding: 1.3rem 2rem;
  }
`;

export const StyledImage = styled(Image)``;

export const StyledDetailsContainer = styled.div`
  max-width: 700px;
  margin-top: 1.5rem;
  padding: 1.5rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledDetailsText = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 500;
  /* font-size: 0.8rem;
  margin-top: 0.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }

  @media (min-width: 1440px) {
    font-size: 1.2rem;
    padding-right: 2rem;
  } */
`;
