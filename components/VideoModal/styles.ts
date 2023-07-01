'use client';
import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';

interface ModalProps {
  active: string;
}

export const StyledModal = styled.dialog<ModalProps>`
  position: absolute;
  width: 100%;
  z-index: 999;
  top: 39.5rem;

  border: none;
  overflow: hidden;

  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);

  display: ${({ active }) => (active === 'true' ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  padding: 1rem;
`;

export const StyledVideoContainer = styled.div`
  width: 100%;
  height: 90vh;
  max-width: 700px;
  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 2rem;
  overflow: hidden;
`;

export const StyledBorderTop = styled.div`
  width: 100%;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const StyledCloseButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;
export const StyledCloseButton = styled.button``;

export const CloseIcon = styled(IoCloseOutline)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gray200};
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto 1.5rem;
  max-width: 400px;
`;
export const StyledTitle = styled.h2`
  text-align: justify;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.3rem;
`;
export const StyledTitleSpan = styled.span`
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors.bluelink};
`;
export const StyledVideo = styled.iframe`
  width: 100%;
  height: 340px;
  border: none;
`;

export const StyledDescriptionContainer = styled.div`
  padding: 1.5rem;
`;

export const StyledSubtitle = styled.h3`
  padding-bottom: 0.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
  font-size: 1rem;
`;

export const StyledDescription = styled.p`
  padding: 0.25rem 0;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-align: justify;
`;
