import { VideosContext } from '@/context/VideosContext';
import React, { useContext } from 'react';
import {
  StyledPaginationContainer,
  StyledPaginationList,
  StyledPaginationListItem,
  StyledText,
} from './styles';

const VideoPagination = () => {
  const { pageNumber, setPage } = useContext(VideosContext);

  const generatePagesArray = (pageNumber: number) => {
    const pages = [];

    for (let i = 0; i < pageNumber; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handleSelectPage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <StyledPaginationContainer>
      <StyledText>Página</StyledText>
      <StyledPaginationList>
        {pageNumber > 0 &&
          generatePagesArray(pageNumber).map((x) => (
            <StyledPaginationListItem
              key={x + 1}
              value={x + 1}
              onClick={() => handleSelectPage(Number(x))}
            >
              {x + 1}
            </StyledPaginationListItem>
          ))}
      </StyledPaginationList>
    </StyledPaginationContainer>
  );
};

export default VideoPagination;
