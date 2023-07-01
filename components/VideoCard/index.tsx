'use client';
import { IVideo } from '@/interfaces/IVideos';
import React, { useState, useRef } from 'react';
import {
  StyledCard,
  StyledCardDescription,
  StyledThumb,
  StyledPreview,
  PlayIcon,
} from './styles';
import VideoModal from '@/components/VideoModal';

interface cardProps {
  video: IVideo;
  reference: React.RefObject<HTMLUListElement>;
}

const VideoCard = ({ video, reference }: cardProps) => {
  const [openModal, setOpenModal] = useState(false);
  // const videoCardRef = useRef<HTMLLIElement | null>(null);

  const handleOpenModal = () => {
    setOpenModal(true);

    reference.current?.scrollIntoView({ behavior: 'smooth' });
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
      <VideoModal isOpen={openModal} video={video} closeModal={setOpenModal} />
    </>
  );
};

export default VideoCard;
