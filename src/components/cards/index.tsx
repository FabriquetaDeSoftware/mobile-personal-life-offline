import { FlatList, View } from 'react-native';
import { s } from './styles';
import { Card } from './card';
import { Button } from '../button';
import { colors } from '@/src/styles/colors';
import { TodoStatus } from '@/src/database/useTodolistDatabase';

interface Data {
  id: number;
  content: string;
  status: TodoStatus;
}

interface Props {
  data: Data[];
  onEdit?: (task: Data) => void;
  onDelete?: (task: Data) => void;
}

export function Cards({ data, onEdit, onDelete }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card content={item.content}>
          <View style={{ flexDirection: 'row' }}>
            <Button.Root
              style={{
                width: '50%',
                borderTopStartRadius: 0,
                borderTopEndRadius: 0,
                borderBottomEndRadius: 0,
                backgroundColor: colors.gray[500],
              }}
              onPress={() => {
                if (onEdit) {
                  onEdit(item);
                }
              }}
            >
              <Button.Title>Editar</Button.Title>
            </Button.Root>

            <Button.Root
              style={{
                width: '50%',
                borderTopStartRadius: 0,
                borderTopEndRadius: 0,
                borderBottomStartRadius: 0,
                backgroundColor: colors.red.base,
              }}
              onPress={() => {
                if (onDelete) {
                  onDelete(item);
                }
              }}
            >
              <Button.Title>Excluir</Button.Title>
            </Button.Root>
          </View>
        </Card>
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={s.content}
      style={s.container}
    />
  );
}
