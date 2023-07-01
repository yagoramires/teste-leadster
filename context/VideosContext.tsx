'use client';
import {
  createContext,
  useState,
  useEffect,
  SetStateAction,
  useRef,
} from 'react';
import db from '@/db.json';
import { IDate, IVideo } from '@/interfaces/IVideos';
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
  sortVideosBySelectedOrder: (type: string) => void;
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
    url: '',
    title: '',
    thumb: '',
    description: '',
    downloads: [''],
    category: '',
    createdAt: { year: 2023, month: 7, day: 1 },
  },
  setSelectedVideo: () => {},
  openVideoModal: false,
  setOpenVideoModal: () => {},
  headerReference: null,
  sortVideosBySelectedOrder: () => {},
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

  const convertDate = (date: IDate) => {
    const converted = new Date(date.year, date.month - 1, date.day);
    return converted.getTime();
  };

  const sortVideosBySelectedOrder = (type: string) => {
    let allVideosArr = [] as IVideo[];
    videos.forEach(
      (videoArr) => (allVideosArr = [...allVideosArr, ...videoArr]),
    );

    const screenSize = getScreenSize();
    let itemsPerPage;

    if (screenSize.width > 1024) {
      itemsPerPage = 9;
    } else if (screenSize.width > 768) {
      itemsPerPage = 6;
    } else {
      itemsPerPage = 3;
    }

    if (type === 'Mais recentes') {
      const sorted = allVideosArr.sort((a, b) => {
        const convertedA = convertDate(a.createdAt);
        const convertedB = convertDate(b.createdAt);
        return convertedB - convertedA;
      });

      const paginatedArray = paginateArray(sorted, itemsPerPage);

      setVideos(paginatedArray);
      setPageNumber(paginatedArray.length);
    } else if (type === 'Mais antigos') {
      const sorted = allVideosArr.sort((a, b) => {
        const convertedA = convertDate(a.createdAt);
        const convertedB = convertDate(b.createdAt);
        return convertedA - convertedB;
      });

      const paginatedArray = paginateArray(sorted, itemsPerPage);

      setVideos(paginatedArray);
      setPageNumber(paginatedArray.length);
    } else {
      return;
    }
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
        sortVideosBySelectedOrder,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
