'use client';
import { useContext, useRef, useState } from 'react';
import { VideosContext } from '@/context/VideosContext';
import VideoCard from '../VideoCard';
import VideoFilter from '../VideoFilter';
import { IVideo } from '@/interfaces/IVideos';
import { StyledCardList, StyledVideosSection } from './styles';
import VideoPagination from '../VideoPagination';
import VideoModal from '../VideoModal';

const Videos = () => {
  const {
    videos,
    videoCategories,
    page,
    setPage,
    openVideoModal,
    setOpenVideoModal,
  } = useContext(VideosContext);
  const videoListRef = useRef(null);

  return (
    <StyledVideosSection>
      <VideoFilter reference={videoListRef} categories={videoCategories} />
      <StyledCardList ref={videoListRef}>
        {videos[page]?.map((video: IVideo) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </StyledCardList>
      <VideoPagination reference={videoListRef} />
      <VideoModal isOpen={openVideoModal} closeModal={setOpenVideoModal} />
    </StyledVideosSection>
  );
};

export default Videos;
