import React, { SetStateAction, useContext, useState, useEffect } from 'react';
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
import { VideosContext } from '@/context/VideosContext';

interface props {
  isOpen: boolean;
  closeModal: React.Dispatch<SetStateAction<boolean>>;
}

const VideoModal = ({ isOpen, closeModal }: props) => {
  const { selectedVideo } = useContext(VideosContext);
  const [video, setVideo] = useState<IVideo | null>(null);

  const handleCloseModal = () => {
    closeModal(false);

    document.body.style.maxHeight = 'auto';
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    setVideo(selectedVideo);
  }, [selectedVideo]);

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
            {video?.title}
          </StyledTitle>
        </StyledTitleContainer>

        <StyledVideo src={video?.url} width='100%' height='340px'></StyledVideo>

        <StyledDescriptionContainer>
          <StyledSubtitle>Descrição</StyledSubtitle>
          <StyledDescription>{video?.description}</StyledDescription>

          <StyledSubtitle>Downloads</StyledSubtitle>
        </StyledDescriptionContainer>
      </StyledVideoContainer>
    </StyledModal>
  );
};

export default VideoModal;
