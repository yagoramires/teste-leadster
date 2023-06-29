'use client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    padding: 4rem 0 2rem;
  }
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 8px;
`;
export const StyledLogo = styled(Image)`
  width: 280px;
  height: auto;
`;
export const StyledLogoText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 400;
`;

export const StyledListContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  max-width: 1200px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 3rem;
    gap: 0;
  }
`;
export const StyledList = styled.ul`
  margin-top: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 1rem;

  @media (min-width: 1024px) {
    gap: 1.5rem;
    width: 25%;
  }
`;

export const StyledListTitle = styled.h3`
  color: ${({ theme }) => theme.colors.gray400};

  @media (min-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`;
export const StyledListItem = styled.li``;
export const StyledListLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray200};
  padding-bottom: 4px;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  }
`;

export const StyledDivider = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray};
  height: 1px;
`;

export const StyledCopyContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 2rem 2rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const StyledCopyText = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  font-size: 0.8rem;
  text-align: center;
  font-weight: 600;

  &:nth-of-type(2) {
    font-weight: 500;
  }
`;

export const StyledCopyLink = styled(Link)`
  color: ${({ theme }) => theme.colors.bluelink};
  text-decoration: none;
`;

export const StyledIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const FacebookIcon = styled(FaFacebookF)`
  color: ${({ theme }) => theme.colors.gray400};
  text-decoration: none;
`;
export const InstaIcon = styled(FaInstagram)`
  color: ${({ theme }) => theme.colors.gray400};
  text-decoration: none;
`;
export const LinkedinIcon = styled(FaLinkedinIn)`
  color: ${({ theme }) => theme.colors.gray400};
  text-decoration: none;
`;

export const StyledIconLink = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.light};
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.gray};
  }
`;
