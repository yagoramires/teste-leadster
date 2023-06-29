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
        <StyledCategoriesListItem
          selected={selectedCategory === 'Todas' ? true : false}
          onClick={() => setSelectedCategory('Todas')}
        >
          Todas
        </StyledCategoriesListItem>
        {categories?.map((category) => (
          <StyledCategoriesListItem
            selected={selectedCategory === category ? true : false}
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
