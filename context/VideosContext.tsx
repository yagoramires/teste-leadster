'use client';
import { createContext, useState, useEffect, SetStateAction } from 'react';
import db from '@/db.json';
import { IVideo } from '@/interfaces/IVideos';
import usePagination from '@/hooks/usePagination';

interface VideoContextProps {
  children: React.ReactNode;
}

interface VideoProps {
  videos: Array<IVideo[]>;
  videoCategories: Array<string>;
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>;
  pageNumber: number;
}

const initialValue = {
  videos: [],
  videoCategories: [],
  page: 0,
  setPage: () => {},
  pageNumber: 0,
};

export const VideosContext = createContext<VideoProps>(initialValue);

export const VideosProvider = ({ children }: VideoContextProps) => {
  const [videos, setVideos] = useState<Array<IVideo[]>>(initialValue.videos);
  const [videoCategories, setVideoCategories] = useState<Array<string>>(
    initialValue.videoCategories,
  );
  const [page, setPage] = useState(initialValue.page);
  const [pageNumber, setPageNumber] = useState(initialValue.pageNumber);

  const { paginateArray, getScreenSize } = usePagination();

  const getVideoCategories = (arr: Array<IVideo>) => {
    const getCategories = arr.map((video) => video.category);

    const removeDuplicatedCategories = new Set(getCategories);

    const categories = Array.from(removeDuplicatedCategories);

    return categories;
  };

  useEffect(() => {
    const screenSize = getScreenSize();
    let itemsPerPage;

    if (screenSize.width > 1024) {
      itemsPerPage = 9;
    } else if (screenSize.width > 1024) {
      itemsPerPage = 6;
    } else {
      itemsPerPage = 3;
    }

    const paginatedArray = paginateArray(db, itemsPerPage);

    setVideos(paginatedArray);
    setVideoCategories(getVideoCategories(db));
    setPageNumber(paginatedArray.length);
  }, []);

  return (
    <VideosContext.Provider
      value={{ videos, videoCategories, page, setPage, pageNumber }}
    >
      {children}
    </VideosContext.Provider>
  );
};
