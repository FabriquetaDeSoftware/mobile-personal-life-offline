import { FlatList } from 'react-native';
import { s } from './styles';
import { Card } from './card';

interface Data {
  id: string;
  content: string;
  status: string;
}

interface Props {
  data: Data[];
}

export function Cards({ data }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Card content={item.content} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.content}
      style={s.container}
    />
  );
}
