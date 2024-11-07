import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle';

const CategoriesScreen = () => {
  const renderCategoryItem = (itemData) => {
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        id={itemData.item.id}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => renderCategoryItem(itemData)}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
