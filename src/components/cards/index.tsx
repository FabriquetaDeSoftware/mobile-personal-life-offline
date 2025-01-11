import { FlatList, View } from 'react-native';
import { s } from './styles';
import { Card } from './card';
import { Button } from '../button';
import { colors } from '@/src/styles/colors';

interface Data {
  id: number;
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
                console.log('editando', item.id);
                // setModalVisible(true);
                // setContentModal(tasks[1].content);
                // setStatusModal(tasks[1].status);
                // setEditingTaskId(tasks[1].id);
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
                console.log('excluindo', item.id);
                // CRUD_METHODS.remove(task.id);
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
