'use client';
import {
  createContext,
  useState,
  useEffect,
  SetStateAction,
  useRef,
} from 'react';
import db from '@/db.json';
import { IVideo } from '@/interfaces/IVideos';
import usePagination from '@/hooks/usePagination';

interface VideoContextProps {
  children: React.ReactNode;
}

interface VideoProps {
  videos: Array<IVideo[]>;
  videoCategories: Array<string>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<SetStateAction<string>>;
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>;
  pageNumber: number;
  selectedVideo: IVideo;
  setSelectedVideo: React.Dispatch<SetStateAction<IVideo>>;
  openVideoModal: boolean;
  setOpenVideoModal: React.Dispatch<SetStateAction<boolean>>;
  headerReference: React.RefObject<HTMLHeadingElement> | null;
}

const initialValue = {
  videos: [],
  videoCategories: [],
  selectedCategory: 'Todas',
  setSelectedCategory: () => {},
  page: 0,
  setPage: () => {},
  pageNumber: 0,
  selectedVideo: {
    id: 1,
    url: 'https://www.youtube.com/embed/t4z68gJX0B0',
    title:
      'Alcançando o sucesso através da expertise das agências de marketing',
    thumb: '/assets/thumbnail.png',
    description:
      'As agências de marketing são especialistas em ajudar as empresas a alcançarem seus objetivos de crescimento por meio de estratégias de publicidade, branding e promoção. Com sua experiência e conhecimento, elas fornecem soluções personalizadas para atingir o público-alvo de forma eficaz.',
    downloads: ['file.xls'],
    category: 'Agências',
    createdAt: { year: 2023, month: 6, day: 1 },
  },
  setSelectedVideo: () => {},
  openVideoModal: false,
  setOpenVideoModal: () => {},
  headerReference: null,
};

export const VideosContext = createContext<VideoProps>(initialValue);

export const VideosProvider = ({ children }: VideoContextProps) => {
  const [videos, setVideos] = useState<Array<IVideo[]>>(initialValue.videos);
  const [videoCategories, setVideoCategories] = useState<Array<string>>(
    initialValue.videoCategories,
  );
  const [selectedVideo, setSelectedVideo] = useState(
    initialValue.selectedVideo,
  );
  const [selectedCategory, setSelectedCategory] = useState(
    initialValue.selectedCategory,
  );
  const [page, setPage] = useState(initialValue.page);
  const [pageNumber, setPageNumber] = useState(initialValue.pageNumber);
  const [openVideoModal, setOpenVideoModal] = useState(
    initialValue.openVideoModal,
  );

  const headerReference = useRef(initialValue.headerReference);

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
    } else if (screenSize.width > 768) {
      itemsPerPage = 6;
    } else {
      itemsPerPage = 3;
    }

    let paginatedArray;

    if (selectedCategory !== 'Todas') {
      const filterVideosByCategory = db.filter(
        (video) => video.category === selectedCategory,
      );
      paginatedArray = paginateArray(filterVideosByCategory, itemsPerPage);
      setPage(0);
    } else {
      paginatedArray = paginateArray(db, itemsPerPage);
    }

    setVideos(paginatedArray);
    setPageNumber(paginatedArray.length);
  }, [selectedCategory]);

  useEffect(() => {
    const screenSize = getScreenSize();
    let itemsPerPage;

    if (screenSize.width > 1024) {
      itemsPerPage = 9;
    } else if (screenSize.width > 768) {
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
      value={{
        videos,
        videoCategories,
        selectedCategory,
        setSelectedCategory,
        page,
        setPage,
        pageNumber,
        selectedVideo,
        setSelectedVideo,
        openVideoModal,
        setOpenVideoModal,
        headerReference,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
