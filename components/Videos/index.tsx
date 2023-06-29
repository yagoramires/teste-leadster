'use client';
import { useContext, useRef } from 'react';
import { VideosContext } from '@/context/VideosContext';
import VideoCard from '../VideoCard';
import VideoCategories from '../VideoCategories';
import { IVideo } from '@/interfaces/IVideos';
import { StyledCardList, StyledVideosSection } from './styles';
import VideoPagination from '../VideoPagination';

const Videos = () => {
  const { videos, videoCategories, page, setPage, pageNumber } =
    useContext(VideosContext);
  const videoListRef = useRef(null);

  return (
    <StyledVideosSection>
      <VideoCategories reference={videoListRef} categories={videoCategories} />
      <StyledCardList ref={videoListRef}>
        {videos[page]?.map((video: IVideo) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </StyledCardList>
      <VideoPagination reference={videoListRef} />
    </StyledVideosSection>
  );
};

export default Videos;
