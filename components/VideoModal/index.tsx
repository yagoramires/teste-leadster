import React, { SetStateAction } from 'react';
import {
  CloseIcon,
  StyledBorderTop,
  StyledCloseButton,
  StyledCloseButtonContainer,
  StyledModal,
  StyledVideoContainer,
  StyledTitleContainer,
  StyledTitle,
  StyledTitleSpan,
  StyledVideo,
  StyledDescriptionContainer,
  StyledSubtitle,
  StyledDescription,
} from './styles';
import { IVideo } from '@/interfaces/IVideos';

interface props {
  isOpen: boolean;
  video: IVideo;
  closeModal: React.Dispatch<SetStateAction<boolean>>;
}

const VideoModal = ({ isOpen, video, closeModal }: props) => {
  const handleCloseModal = () => {
    closeModal(false);
  };

  return (
    <StyledModal open={isOpen} active={isOpen.toString()}>
      <StyledVideoContainer>
        <StyledBorderTop></StyledBorderTop>
        <StyledCloseButtonContainer>
          <StyledCloseButton onClick={handleCloseModal}>
            <CloseIcon />
          </StyledCloseButton>
        </StyledCloseButtonContainer>

        <StyledTitleContainer>
          <StyledTitle>
            <StyledTitleSpan>Webinar:</StyledTitleSpan>
            {video.title}
          </StyledTitle>
        </StyledTitleContainer>

        <StyledVideo src={video.url} width='100%' height='340px'></StyledVideo>

        <StyledDescriptionContainer>
          <StyledSubtitle>Descrição</StyledSubtitle>
          <StyledDescription>{video.description}</StyledDescription>

          <StyledSubtitle>Downloads</StyledSubtitle>
        </StyledDescriptionContainer>
      </StyledVideoContainer>
    </StyledModal>
  );
};

export default VideoModal;
