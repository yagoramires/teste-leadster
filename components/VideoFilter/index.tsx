import { VideosContext } from '@/context/VideosContext';
import { useContext } from 'react';
import {
  StyledFilterContainer,
  StyledCategoriesList,
  StyledCategoriesListItem,
  StyledOrder,
  StyledOrderContainer,
  StyledOrderLabel,
  StyledOrderOption,
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
    <StyledFilterContainer>
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

      <StyledOrderContainer>
        <StyledOrderLabel>Ordenar por</StyledOrderLabel>
        <StyledOrder>
          <StyledOrderOption>Data de Publicação</StyledOrderOption>
        </StyledOrder>
      </StyledOrderContainer>
    </StyledFilterContainer>
  );
};

export default VideoCategories;
