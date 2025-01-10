import { FlatList, StyleProp, ViewStyle } from 'react-native';
import { s } from './styles';
import { Category } from './category';
import { TodoStatus } from '@/src/database/useTodolistDatabase';

export type CategoriesProps = {
  id: string;
  name: string;
  status: TodoStatus;
}[];

type Props = {
  data: CategoriesProps;
  selected: string;
  onSelect: (status: TodoStatus) => void;
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
          onPress={() => onSelect(item.status)}
          isSelected={item.status === selected}
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
