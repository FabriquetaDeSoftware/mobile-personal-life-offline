import { FlatList, StyleProp, ViewStyle, FlatListProps } from 'react-native';
import { s } from './styles';
import { Category } from './category';
import { TodoStatus } from '@/src/database/useTodolistDatabase';

export interface CategoriesProps {
  id: string;
  name: string;
  status: TodoStatus;
}

interface Props extends Omit<FlatListProps<CategoriesProps>, 'renderItem'> {
  data: CategoriesProps[];
  selected: string;
  onSelect: (status: TodoStatus) => void;
  style?: StyleProp<ViewStyle>;
}

export function Categories({
  data,
  selected,
  onSelect,
  style,
  ...rest
}: Props) {
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
      contentContainerStyle={[s.content, style]}
      style={s.container}
      {...rest}
    />
  );
}
