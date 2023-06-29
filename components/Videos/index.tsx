'use client';
import { useContext, useState } from 'react';
import { VideosContext } from '@/context/VideosContext';
import VideoCard from '../VideoCard';
import VideoCategories from '../VideoCategories';
import { IVideo } from '@/interfaces/IVideos';
import { StyledCardList, StyledVideosSection } from './styles';
import VideoPagination from '../VideoPagination';

const Videos = () => {
  const { videos, videoCategories, page, setPage, pageNumber } =
    useContext(VideosContext);

  return (
    <StyledVideosSection>
      <VideoCategories categories={videoCategories} />
      <StyledCardList>
        {videos[page]?.map((video: IVideo) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </StyledCardList>
      <VideoPagination />
    </StyledVideosSection>
  );
};

export default Videos;
