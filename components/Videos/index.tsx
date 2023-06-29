'use client';
import { useContext } from 'react';
import { VideosContext } from '@/context/VideosContext';
import VideoCard from '../VideoCard';
import VideoCategories from '../VideoCategories';
import { IVideo } from '@/interfaces/IVideos';
import { StyledCardList, StyledVideosSection } from './styles';

const Videos = () => {
  const { videos } = useContext(VideosContext);

  return (
    <StyledVideosSection>
      <VideoCategories />
      <StyledCardList>
        {videos?.map((video: IVideo) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </StyledCardList>
    </StyledVideosSection>
  );
};

export default Videos;
