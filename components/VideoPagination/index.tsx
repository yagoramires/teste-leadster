import { VideosContext } from '@/context/VideosContext';
import React, { useContext } from 'react';
import {
  StyledPaginationContainer,
  StyledPaginationList,
  StyledPaginationListItem,
  StyledText,
} from './styles';

interface props {
  reference: React.RefObject<HTMLUListElement>;
}

const VideoPagination = ({ reference }: props) => {
  const { page, pageNumber, setPage } = useContext(VideosContext);

  const generatePagesArray = (pageNumber: number) => {
    const pages = [];

    for (let i = 0; i < pageNumber; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handleSelectPage = (pageNumber: number) => {
    setPage(pageNumber);
    reference.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <StyledPaginationContainer>
      <StyledText>Página</StyledText>
      <StyledPaginationList>
        {pageNumber > 0 &&
          generatePagesArray(pageNumber).map((x) => (
            <StyledPaginationListItem
              selected={page === x ? true : false}
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
