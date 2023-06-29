import { VideosContext } from '@/context/VideosContext';
import { useContext } from 'react';
import {
  StyledCategoriesContainer,
  StyledCategoriesList,
  StyledCategoriesListItem,
} from './styles';

interface props {
  categories: Array<string>;
}

const VideoCategories = ({ categories }: props) => {
  const { pageNumber } = useContext(VideosContext);

  return (
    <StyledCategoriesContainer>
      <StyledCategoriesList>
        <StyledCategoriesListItem>Todas</StyledCategoriesListItem>
        {categories?.map((category) => (
          <StyledCategoriesListItem>{category}</StyledCategoriesListItem>
        ))}
      </StyledCategoriesList>
    </StyledCategoriesContainer>
  );
};

export default VideoCategories;
