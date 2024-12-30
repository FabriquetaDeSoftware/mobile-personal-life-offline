import { Text, View } from 'react-native';
import { Button } from '../../components/button';
import { router } from 'expo-router';
import { Categories } from '@/src/components/categories';
import { useState } from 'react';
import { Input } from '@/src/components/input';
import { Cards } from '@/src/components/cards';
import { colors } from '@/src/styles/colors';
import { Popup } from '@/src/components/popup';
import { fontFamily } from '@/src/styles/theme';
import {
  TodoStatus,
  useTodoListDatabase,
} from '@/src/database/useTodolistDatabase';
import { Picker } from '@react-native-picker/picker';

export default function TodoLists() {
  const categories = [
    { id: '1', name: 'Concluidos', status: 'completed' },
    { id: '2', name: 'Pendentes', status: 'pending' },
    { id: '3', name: 'Lixeira', status: 'trash' },
  ];

  const tasks: any = [];

  const [selectedCategory, setSelectedCategory] = useState<string>('2');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [content, setContent] = useState('');
  const [status, setStatus] = useState<TodoStatus>(TodoStatus.Pending);

  const handleSelectCategory = (id: string) => {
    setSelectedCategory(id);
  };

  const categoryMap: { [key: string]: string } = {
    '1': 'Concluido',
    '2': 'Pendente',
    '3': 'Lixeira',
  };

  const filteredTasks = tasks.filter(
    (task: any) => task.status === categoryMap[selectedCategory]
  );

  // const todoListDatabase = await useTodoListDatabase();
  // async function create() {
  //   try {
  //     const response = await todoListDatabase.create({ content, status });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <View style={{ flex: 1, padding: 40, gap: 40, marginTop: 24 }}>
      <View>
        <Categories
          data={categories}
          selected={selectedCategory}
          onSelect={handleSelectCategory}
          style={{ justifyContent: 'space-between' }}
        />
      </View>

      <Cards data={filteredTasks}>
        <Button.Root
          style={{
            width: '50%',
            borderTopStartRadius: 0,
            borderTopEndRadius: 0,
            borderBottomEndRadius: 0,
            backgroundColor: colors.gray[500],
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
        >
          <Button.Title>Excluir</Button.Title>
        </Button.Root>
      </Cards>

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Button.Root
          onPress={() => router.back()}
          style={{ width: '50%', backgroundColor: colors.gray[500] }}
        >
          <Button.Title>Voltar</Button.Title>
        </Button.Root>
        <Button.Root
          onPress={() => setModalVisible(true)}
          style={{ width: '50%' }}
        >
          <Button.Title>Inserir</Button.Title>
        </Button.Root>
      </View>

      <Popup isVisible={modalVisible}>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontFamily: fontFamily.bold,
              marginBottom: 15,
              textAlign: 'center',
            }}
          >
            Nova Tarefa
          </Text>
        </View>

        <View>
          <Input
            placeholder="Digite o nome da tarefa"
            placeholderTextColor={colors.gray[400]}
            multiline
            numberOfLines={4}
            style={{ height: 90 }}
            onChangeText={setContent}
            value={content}
          />
        </View>

        <View>
          <Picker
            selectedValue={status}
            onValueChange={(itemValue) => setStatus(itemValue)}
            style={{
              backgroundColor: colors.gray[100],
              borderRadius: 8,
              borderWidth: 1,
              borderColor: colors.gray[300],
            }}
            itemStyle={{ color: 'black' }}
          >
            <Picker.Item label="Concluído" value={TodoStatus.Completed} />
            <Picker.Item label="Pendente" value={TodoStatus.Pending} />
            <Picker.Item label="Lixeira" value={TodoStatus.Trash} />
          </Picker>
        </View>

        <View style={{ flexDirection: 'row', gap: 10, marginTop: 20 }}>
          <Button.Root
            onPress={() => {
              setModalVisible(false);
              setContent('');
              setStatus(TodoStatus.Pending);
            }}
            style={{ width: '50%', backgroundColor: colors.gray[500] }}
          >
            <Button.Title>Cancelar</Button.Title>
          </Button.Root>
          <Button.Root
            onPress={() => setModalVisible(false)}
            style={{ width: '50%' }}
          >
            <Button.Title>Salvar</Button.Title>
          </Button.Root>
        </View>
      </Popup>
    </View>
  );
}
