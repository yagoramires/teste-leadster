import { VideosContext } from '@/context/VideosContext';
import { useContext } from 'react';
import {
  StyledCategoriesContainer,
  StyledCategoriesList,
  StyledCategoriesListItem,
} from './styles';

interface props {
  categories: Array<string>;
  reference: React.RefObject<HTMLUListElement>;
}

const VideoCategories = ({ categories, reference }: props) => {
  const { selectedCategory, setSelectedCategory } = useContext(VideosContext);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    reference.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <StyledCategoriesContainer>
      <StyledCategoriesList>
        <StyledCategoriesListItem
          selected={selectedCategory === 'Todas' ? true : false}
          onClick={() => {
            handleSelectCategory('Todas');
          }}
        >
          Todas
        </StyledCategoriesListItem>
        {categories?.map((category) => (
          <StyledCategoriesListItem
            key={category}
            selected={selectedCategory === category ? true : false}
            onClick={() => {
              handleSelectCategory(category);
            }}
          >
            {category}
          </StyledCategoriesListItem>
        ))}
      </StyledCategoriesList>
    </StyledCategoriesContainer>
  );
};

export default VideoCategories;
