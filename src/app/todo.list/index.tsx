import { Text, View } from 'react-native';
import { Button } from '../../components/button';
import { router } from 'expo-router';
import { Categories } from '@/src/components/categories';
import { useEffect, useState } from 'react';
import { Input } from '@/src/components/input';
import { Cards } from '@/src/components/cards';
import { colors } from '@/src/styles/colors';
import { Popup } from '@/src/components/popup';
import { fontFamily } from '@/src/styles/theme';
import {
  TodoStatus,
  useTodoListDatabase,
  todoListDatabase,
} from '@/src/database/useTodolistDatabase';
import { Picker } from '@react-native-picker/picker';

export default function TodoLists() {
  const categories: { id: string; name: string; status: TodoStatus }[] = [
    { id: '1', name: 'Concluidos', status: TodoStatus.Completed },
    { id: '2', name: 'Pendentes', status: TodoStatus.Pending },
    { id: '3', name: 'Lixeira', status: TodoStatus.Trash },
  ];

  const [tasks, setTasks] = useState<todoListDatabase[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<string>('2');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [contentModal, setContentModal] = useState('');
  const [statusModal, setStatusModal] = useState<TodoStatus>(
    TodoStatus.Pending
  );

  const handleSelectCategory = (id: string) => {
    setSelectedCategory(id);
  };

  const categoryMap: { [key: string]: string } = {
    '1': TodoStatus.Completed,
    '2': TodoStatus.Pending,
    '3': TodoStatus.Trash,
  };

  const filteredTasks = tasks.filter(
    (task) => task.status === categoryMap[selectedCategory]
  );

  function CRUD() {
    const todoListDatabase = useTodoListDatabase();

    async function create(content: string, status: TodoStatus) {
      try {
        const response = await todoListDatabase.create({ content, status });
        CRUD_METHODS.read(categoryMap[selectedCategory] as TodoStatus);

        return { response };
      } catch (error) {
        console.error(error);
      }
    }

    async function read(status: TodoStatus) {
      try {
        const response = await todoListDatabase.read(status);

        setTasks(response);
      } catch (error) {
        console.error(error);
      }
    }

    async function removePermaly(id: number) {
      try {
        const response = await todoListDatabase.remove(id);
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));

        return { response };
      } catch (error) {
        console.error(error);
      }
    }

    return { create, read, removePermaly };
  }
  const CRUD_METHODS = CRUD();

  useEffect(() => {
    const response = categoryMap[selectedCategory] as TodoStatus;

    CRUD_METHODS.read(response);
  }, [selectedCategory]);

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
        {filteredTasks.map((task) => (
          <View key={task.id} style={{ flexDirection: 'row' }}>
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
              onPress={() => CRUD_METHODS.removePermaly(task.id)}
            >
              <Button.Title>Excluir</Button.Title>
            </Button.Root>
          </View>
        ))}
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
            onChangeText={setContentModal}
            value={contentModal}
          />
        </View>

        <View>
          <Picker
            selectedValue={statusModal}
            onValueChange={(itemValue) => setStatusModal(itemValue)}
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
              setContentModal('');
              setStatusModal(TodoStatus.Pending);
            }}
            style={{ width: '50%', backgroundColor: colors.gray[500] }}
          >
            <Button.Title>Cancelar</Button.Title>
          </Button.Root>
          <Button.Root
            onPress={() => {
              setModalVisible(false);
              setContentModal('');
              setStatusModal(TodoStatus.Pending);
              CRUD_METHODS.create(contentModal, statusModal);
            }}
            style={{ width: '50%' }}
          >
            <Button.Title>Salvar</Button.Title>
          </Button.Root>
        </View>
      </Popup>
    </View>
  );
}
