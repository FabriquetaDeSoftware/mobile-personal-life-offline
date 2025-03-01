import { Text, View } from 'react-native';
import { Button } from '../../components/button';
import { router } from 'expo-router';
import { useState } from 'react';
import { Cards } from '@/src/components/cards';
import { colors, fontFamily } from '@/src/styles/theme';
import { todoListDatabase } from '@/src/database/useTodolistDatabase';
import { Input } from '@/src/components/input';
import { Popup } from '@/src/components/popup';

export default function Finances() {
  const [tasks, setTasks] = useState<todoListDatabase[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <View style={{ flex: 1, padding: 40, gap: 40, marginTop: 24 }}>
      <Cards data={tasks} />

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
            Inserir Conta Bancária
          </Text>
        </View>

        <View style={{ gap: 10 }}>
          <Input
            placeholder="Nome da Conta"
            placeholderTextColor={colors.gray[400]}
            // onChangeText={setContentModal}
            // value={contentModal}
          />

          <Input
            placeholder="Valor Inicial da Conta"
            keyboardType="number-pad"
            placeholderTextColor={colors.gray[400]}
            // onChangeText={setContentModal}
            // value={contentModal}
          />
        </View>

        <View style={{ flexDirection: 'row', gap: 10, marginTop: 20 }}>
          <Button.Root
            onPress={() => {
              setModalVisible(false);
              // setContentModal('');
              // setStatusModal(TodoStatus.Pending);
              // setEditingTaskId(null);
            }}
            style={{ width: '50%', backgroundColor: colors.gray[500] }}
          >
            <Button.Title>Cancelar</Button.Title>
          </Button.Root>
          <Button.Root
            onPress={() => {
              setModalVisible(false);

              // if (editingTaskId !== null) {
              //   // CRUD_METHODS.update(editingTaskId, {
              //   //   content: contentModal,
              //   //   status: statusModal,
              //   // });
              // } else {
              //   // CRUD_METHODS.create(contentModal, statusModal);
              // }

              // setContentModal('');
              // setStatusModal(TodoStatus.Pending);
              // setEditingTaskId(null);
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
