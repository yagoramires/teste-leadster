import { VideosContext } from '@/context/VideosContext';
import { useContext } from 'react';

interface props {
  categories: Array<string>;
}

const VideoCategories = ({ categories }: props) => {
  const { pageNumber } = useContext(VideosContext);

  return <ul>{categories?.map((category) => category)}</ul>;
};

export default VideoCategories;
