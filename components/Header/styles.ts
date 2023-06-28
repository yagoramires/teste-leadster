'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export const StyleHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media (min-width: 1024px) {
    padding: 2.5rem;
  }
`;

export const StyledLink = styled(Link)``;

export const StyledLogo = styled(Image)`
  width: 120px;
  height: auto;

  @media (min-width: 1024px) {
    width: 194px;
  }
`;
