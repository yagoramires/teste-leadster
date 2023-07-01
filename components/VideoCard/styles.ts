'use client';
import styled from 'styled-components';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

export const StyledCard = styled.li`
  list-style: none;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding-bottom: 1rem;

  max-width: 344px;
  overflow: hidden;
  border-radius: 1rem;
  cursor: pointer;
  position: relative;

  &:hover {
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & p {
      color: ${({ theme }) => theme.colors.bluelink};
    }
  }

  @media (min-width: 768px) {
    max-width: 290px;
  }

  @media (min-width: 1200px) {
    max-width: 362px;
  }
`;

export const StyledPreview = styled.div`
  position: absolute;
  display: none;
  width: 100%;
  height: 204px;
  background: ${({ theme }) => `${theme.colors.bluelink}40`};
`;

export const PlayIcon = styled(FaPlay)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledThumb = styled(Image)`
  margin-bottom: 1rem;
  max-width: 344px;
  height: auto;

  @media (min-width: 768px) {
    max-width: 290px;
  }

  @media (min-width: 1200px) {
    max-width: 362px;
  }
`;

export const StyledCardDescription = styled.p`
  padding: 0 1rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.dark};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
