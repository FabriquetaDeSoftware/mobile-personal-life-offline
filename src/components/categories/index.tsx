import { FlatList, StyleProp, ViewStyle } from 'react-native';
import { s } from './styles';
import { Category } from './category';

export type CategoriesProps = {
  id: string;
  name: string;
}[];

type Props = {
  data: CategoriesProps;
  selected: string;
  onSelect: (id: string) => void;
  style?: StyleProp<ViewStyle>;
};

export function Categories({ data, selected, onSelect, style }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          text={item.name}
          onPress={() => onSelect(item.id)}
          isSelected={item.id === selected}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[s.content, style]}
      style={s.container}
      scrollEnabled={false}
    />
  );
}
