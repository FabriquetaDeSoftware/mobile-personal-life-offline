import { Modal, Text, View } from 'react-native';
import { Button } from '../../components/button';
import { router } from 'expo-router';
import { Categories } from '@/src/components/categories';
import { useState } from 'react';
import { Input } from '@/src/components/input';
import { Cards } from '@/src/components/cards';
import { colors } from '@/src/styles/colors';
import { Popup } from '@/src/components/popup';

export default function TodoLists() {
  const categories = [
    { id: '1', name: 'Concluidos' },
    { id: '2', name: 'Pendentes' },
    { id: '3', name: 'Excluidos' },
  ];

  const tasks = [
    { id: '1', content: 'Tarefa 1', status: 'Concluido' },
    { id: '2', content: 'Tarefa 2', status: 'Pendente' },
    { id: '3', content: 'Tarefa 3', status: 'Excluido' },
    { id: '4', content: 'Tarefa 4', status: 'Excluido' },
    { id: '5', content: 'Tarefa 5', status: 'Pendente' },
    { id: '6', content: 'Tarefa 6', status: 'Concluido' },
    { id: '7', content: 'Tarefa 7', status: 'Concluido' },
    { id: '8', content: 'Tarefa 8', status: 'Concluido' },
    { id: '9', content: 'Tarefa 9', status: 'Concluido' },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('2');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleSelectCategory = (id: string) => {
    setSelectedCategory(id);
  };

  const categoryMap: { [key: string]: string } = {
    '1': 'Concluido',
    '2': 'Pendente',
    '3': 'Excluido',
  };

  const filteredTasks = tasks.filter(
    (task) => task.status === categoryMap[selectedCategory]
  );

  return (
    <View style={{ flex: 1, padding: 40, gap: 40, marginTop: 24 }}>
      <View style={{ gap: 10 }}>
        <Categories
          data={categories}
          selected={selectedCategory}
          onSelect={handleSelectCategory}
          style={{ flex: 1, justifyContent: 'space-between' }}
        />
      </View>

      <Cards data={filteredTasks} />

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

      <Popup></Popup>
      {/* <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Nova Tarefa</Text>
            <Input placeholder="Digite o nome da tarefa" />
            <Input
              placeholder="Digite o nome da tarefa"
              placeholderTextColor={colors.gray[400]}
            />

            <View style={{ flexDirection: 'row', gap: 10, marginTop: 20 }}>
              <Button.Root
                onPress={() => setModalVisible(false)}
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
          </View>
        </View>
      </Modal> */}
    </View>
  );
}
