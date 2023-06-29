import { IVideo } from '@/interfaces/IVideos';

const usePagination = () => {
  const paginateArray = (array: Array<IVideo>, itemsPerPage: number) => {
    const paginatedArray = [];
    const totalPages = Math.ceil(array.length / itemsPerPage);

    for (let i = 0; i < totalPages; i++) {
      const startIndex = i * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const page = array.slice(startIndex, endIndex);
      paginatedArray.push(page);
    }

    return paginatedArray;
  };

  const getScreenSize = () => {
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const screenHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    return {
      width: screenWidth,
      height: screenHeight,
    };
  };

  return { paginateArray, getScreenSize };
};

export default usePagination;
