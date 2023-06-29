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
  const { selectedCategory, setSelectedCategory } = useContext(VideosContext);

  return (
    <StyledCategoriesContainer>
      <StyledCategoriesList>
        <StyledCategoriesListItem onClick={() => setSelectedCategory('')}>
          Todas
        </StyledCategoriesListItem>
        {categories?.map((category) => (
          <StyledCategoriesListItem
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </StyledCategoriesListItem>
        ))}
      </StyledCategoriesList>
    </StyledCategoriesContainer>
  );
};

export default VideoCategories;
