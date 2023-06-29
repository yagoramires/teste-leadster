'use client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const StyledBackground = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.light};
`;
export const StyledContainer = styled.div`
  padding: 2rem;
  margin: 0 auto;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  @media (min-width: 1024px) {
    gap: 2rem;
    align-items: center;
    flex-direction: row;
    padding: 2rem 0;
  }
`;

export const StyledDemoImage = styled(Image)`
  margin: 0 auto;
  width: 300px;
  height: auto;
  @media (min-width: 1024px) {
    width: 500px;
  }
  @media (min-width: 1440px) {
    width: 640px;
  }
`;

export const StyledLeadsTextsContainer = styled.div`
  flex: 1;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

export const StyledBold = styled.b`
  font-weight: 800;
`;

export const StyledTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.dark};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    font-size: 2rem;
    align-items: flex-start;
  }
`;

export const StyledButtonContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin-top: 1.5rem;

  border-top: 2px solid ${({ theme }) => theme.colors.gray};
  padding: 1.5rem 0;

  display: flex;
  justify-content: center;
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
`;

export const StyledLink = styled(Link)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.8rem 0.5rem;
  text-decoration: none;
  font-weight: 600;
  border-radius: 2rem;
  transition: all 0.2s;
  font-size: 0.8rem;
  text-align: center;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
    padding: 1.3rem 1rem;
  }
`;

export const StyledStampImage = styled(Image)`
  width: 120px;
  height: auto;

  @media (min-width: 1024px) {
    width: 200px;
  }
`;

export const StyledImage = styled(Image)``;

export const StyledDetailsContainer = styled.div`
  margin: 1.5rem auto 0;
  padding: 1.5rem 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    font-size: 2rem;
  }

  & div {
    display: flex;
    align-items: center;

    gap: 1rem;

    @media (min-width: 1024px) {
      width: 100%;
    }
  }
`;

export const StyledDetailsText = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 0.8rem;

  @media (min-width: 1200px) {
    font-size: 1rem;
  }
`;
