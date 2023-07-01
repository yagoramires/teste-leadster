'use client';
import { IVideo } from '@/interfaces/IVideos';
import React, { useContext } from 'react';
import {
  StyledCard,
  StyledCardDescription,
  StyledThumb,
  StyledPreview,
  PlayIcon,
} from './styles';

import { VideosContext } from '@/context/VideosContext';

interface cardProps {
  video: IVideo;
}

const VideoCard = ({ video }: cardProps) => {
  const { setOpenVideoModal, setSelectedVideo, headerReference } =
    useContext(VideosContext);

  const handleOpenModal = () => {
    setOpenVideoModal(true);
    setSelectedVideo(video);
    headerReference?.current?.scrollIntoView({ behavior: 'smooth' });

    document.body.style.maxHeight = '100vh';
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <StyledCard onClick={handleOpenModal}>
        <StyledPreview>
          <PlayIcon />
        </StyledPreview>
        <StyledThumb
          src={video.thumb}
          width={362}
          height={204}
          alt='thumbnail'
        />
        <StyledCardDescription>{video.title}</StyledCardDescription>
      </StyledCard>
    </>
  );
};

export default VideoCard;
