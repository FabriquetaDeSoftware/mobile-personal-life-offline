import { FlatList, ViewProps } from 'react-native';
import { s } from './styles';
import { Card } from './card';

interface Data {
  id: string;
  content: string;
  status: string;
}

interface Props extends ViewProps {
  data: Data[];
}

export function Cards({ data, children }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Card content={item.content}>{children}</Card>}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.content}
      style={s.container}
    />
  );
}
