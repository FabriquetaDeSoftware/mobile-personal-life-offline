import { Text, View, Alert } from 'react-native';
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
  const [tasks, setTasks] = useState<todoListDatabase[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<TodoStatus>(
    TodoStatus.Pending
  );
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [contentModal, setContentModal] = useState('');
  const [statusModal, setStatusModal] = useState<TodoStatus>(
    TodoStatus.Pending
  );
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

  const handleSelectCategory = (status: TodoStatus) => {
    setSelectedCategory(status);
  };

  const handleEditTask = (task: todoListDatabase) => {
    setModalVisible(true);
    setContentModal(task.content);
    setStatusModal(task.status);
    setEditingTaskId(task.id);
  };

  const handleDeleteTask = (task: todoListDatabase) => {
    CRUD_METHODS.remove(task.id);
  };

  function CRUD() {
    const todoListDatabase = useTodoListDatabase();

    async function create(content: string, status: TodoStatus) {
      if (!content.trim()) {
        Alert.alert('Erro', 'O conteúdo da tarefa não pode estar vazio.');
        return;
      }

      try {
        const response = await todoListDatabase.create({ content, status });
        await CRUD_METHODS.read(selectedCategory);
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

    async function update(
      id: number,
      data: Partial<Omit<todoListDatabase, 'id'>>
    ) {
      if (!data.content?.trim()) {
        Alert.alert('Erro', 'O conteúdo da tarefa não pode estar vazio.');
        return;
      }

      try {
        const response = await todoListDatabase.update(id, data);
        await CRUD_METHODS.read(selectedCategory);
        return { response };
      } catch (error) {
        console.error(error);
      }
    }

    async function remove(id: number) {
      try {
        const response = await todoListDatabase.remove(id);
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));

        return { response };
      } catch (error) {
        console.error(error);
      }
    }

    return { create, read, update, remove };
  }

  const CRUD_METHODS = CRUD();

  useEffect(() => {
    CRUD_METHODS.read(selectedCategory as TodoStatus);
  }, [selectedCategory]);

  const statusTranslations: Record<TodoStatus, string> = {
    [TodoStatus.Pending]: 'Pendente',
    [TodoStatus.Completed]: 'Concluído',
  };

  const categoriesData = Object.values(TodoStatus).map((status) => ({
    status,
    text: statusTranslations[status],
  }));

  return (
    <View style={{ flex: 1, padding: 40, gap: 40, marginTop: 24 }}>
      <View>
        <Categories
          data={categoriesData}
          selected={selectedCategory}
          onSelect={handleSelectCategory}
          scrollEnabled={false}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <Cards data={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />

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
            {editingTaskId ? 'Editar Tarefa' : 'Nova Tarefa'}
          </Text>
        </View>

        <View>
          <Input
            placeholder="Digite a tarefa"
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
            <Picker.Item label="Pendente" value={TodoStatus.Pending} />
            <Picker.Item label="Concluído" value={TodoStatus.Completed} />
          </Picker>
        </View>

        <View style={{ flexDirection: 'row', gap: 10, marginTop: 20 }}>
          <Button.Root
            onPress={() => {
              setModalVisible(false);
              setContentModal('');
              setStatusModal(TodoStatus.Pending);
              setEditingTaskId(null);
            }}
            style={{ width: '50%', backgroundColor: colors.gray[500] }}
          >
            <Button.Title>Cancelar</Button.Title>
          </Button.Root>
          <Button.Root
            onPress={() => {
              setModalVisible(false);

              if (editingTaskId !== null) {
                CRUD_METHODS.update(editingTaskId, {
                  content: contentModal,
                  status: statusModal,
                });
              } else {
                CRUD_METHODS.create(contentModal, statusModal);
              }

              setContentModal('');
              setStatusModal(TodoStatus.Pending);
              setEditingTaskId(null);
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
