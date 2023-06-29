import { IVideo } from '@/interfaces/IVideos';
import React from 'react';
import {
  StyledCard,
  StyledCardDescription,
  StyledThumb,
  StyledPreview,
  PlayIcon,
} from './styles';

interface cardProps {
  video: IVideo;
}

const VideoCard = ({ video }: cardProps) => {
  return (
    <StyledCard>
      <StyledPreview>
        <PlayIcon />
      </StyledPreview>
      <StyledThumb src={video.thumb} width={362} height={204} alt='thumbnail' />
      <StyledCardDescription>{video.description}</StyledCardDescription>
    </StyledCard>
  );
};

export default VideoCard;
